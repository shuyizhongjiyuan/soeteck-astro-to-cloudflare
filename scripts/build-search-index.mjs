#!/usr/bin/env node
/**
 * Soeteck 构建期搜索索引生成器
 * ------------------------------------------------------------------
 * 目标输出：public/search-index/<lang>.json（5 语言），供 SearchPage 客户端搜索。
 *
 * 流程：
 *   1. GET /wp-json/soeteck/v1/routes?dynamic=1  → 全站唯一内容路由（EN 前缀）
 *   2. 排除 /search/、/preview-*（自身页面/预览不进索引）
 *   3. 对每条路由 × 5 语言，按 routeType 拉轻量元数据（/page /product-category /product /article /archive）
 *   4. 提取 title / excerpt / type / url，写 public/search-index/<lang>.json
 *
 * 缓存：routes 响应的 date 不变时复用 .cache/search-index-<date>.json，避免重复 1155 次抓取。
 * 并发：SEARCH_INDEX_CONCURRENCY（默认 16）防打爆 CMS。
 *
 * 用法：node scripts/build-search-index.mjs        # 普通（带缓存）
 *        CONTENT_API_BASE_URL=... node scripts/build-search-index.mjs
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FRONTEND = resolve(__dirname, '..');
const OUT_DIR = resolve(FRONTEND, 'public', 'search-index');
const CACHE_DIR = resolve(FRONTEND, '.cache');

const API_BASE =
  process.env.CONTENT_API_BASE_URL ||
  process.env.PUBLIC_CONTENT_API_BASE_URL ||
  'https://cms.soeteck.com';

const LANGS = ['en', 'zh', 'ru', 'pt', 'es'];
const CONCURRENCY = Number(process.env.SEARCH_INDEX_CONCURRENCY || 16);

/** routeType → Content API endpoint（与前端 content-api.ts endpointForRouteType 一致） */
const ENDPOINT = {
  home: 'page',
  page: 'page',
  product_category: 'product-category',
  product: 'product',
  article: 'article',
  article_category_archive: 'archive',
  solution: 'page',
};

/** 不进索引的路由（搜索页自身 + 预览页 + 拆分类） */
const EXCLUDE_PATHS = [
  /^\/(en|zh|ru|pt|es)\/(search\/?|preview[\/-])/,
  /^\/(en|zh|ru|pt|es)\/?$/,
];

function localizePath(apiPath, lang) {
  // home 路由 path="/en/" → 语言根 "/{lang}/"
  const stripped = apiPath.replace(/^\/(en|zh|ru|pt|es)\//, '/');
  if (stripped === '/' || stripped === '') {
    return '/' + lang + '/';
  }
  return '/' + lang + stripped;
}

function stripHtml(s) {
  return (s || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function shortExcerpt(s, max = 220) {
  let clean = stripHtml(s)
    .replace(/\[\s*&hellip;\s*\]/g, '…')
    .replace(/\[\s*\.\.\.\s*\]/g, '…');
  if (clean.length > max) clean = clean.slice(0, max).replace(/\s+\S*$/, '') + '…';
  return clean.trim();
}

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  return res.json();
}

/** 提取一条索引文档 */
function toDoc(route, lang, content) {
  const title =
    content?.page?.title ??
    content?.product?.title ??
    content?.article?.title ??
    content?.category?.name ??
    content?.archive?.name ??
    content?.seo?.title ??
    localizePath(route.path, lang);

  let excerpt = content?.seo?.description ?? content?.page?.excerpt ?? content?.product?.shortDescription ?? '';
  if (content?.article?.excerpt) excerpt = content.article.excerpt;

  return {
    url: localizePath(route.path, lang),
    title: typeof title === 'string' ? title.trim() : localizePath(route.path, lang),
    type: route.routeType ?? 'page',
    excerpt: shortExcerpt(typeof excerpt === 'string' ? excerpt : ''),
  };
}

async function run() {
  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(CACHE_DIR, { recursive: true });

  const list = await getJson(`${API_BASE}/wp-json/soeteck/v1/routes?dynamic=1`);
  const routeDate = list.date || '';
  const routes = (list.routes || []).filter((r) => {
    const p = r.path || '';
    return !EXCLUDE_PATHS.some((re) => re.test(p));
  });

  console.log(`[search-index] routes: ${routes.length}, date: ${routeDate}`);

  // 缓存命中则跳过抓取（缓存数据同样过一遍去噪）
  const cachePath = resolve(CACHE_DIR, `search-index-v2-${routeDate}.json`);
  if (routeDate && existsSync(cachePath)) {
    const cached = JSON.parse(readFileSync(cachePath, 'utf8'));
    console.log(`[search-index] cache hit → ${cachePath}`);
    for (const lang of LANGS) {
      const payload = cached.docs[lang] ?? { docs: [] };
      payload.docs = (payload.docs || []).map((d) => ({ ...d, excerpt: shortExcerpt(d.excerpt || '') }));
      writeFileSync(resolve(OUT_DIR, `${lang}.json`), JSON.stringify(payload));
    }
    console.log('[search-index] done (cached).');
    return;
  }

  // 并发抓取器
  const results = new Map(); // key = route.path
  let idx = 0;
  async function worker() {
    while (idx < routes.length) {
      const route = routes[idx++];
      const routeType = route.routeType || 'page';
      const endpoint = ENDPOINT[routeType];
      if (!endpoint) {
        results.set(route.path, {});
        continue;
      }
      const langDocs = {};
      let ok = 0;
      for (const lang of LANGS) {
        try {
          const url = `${API_BASE}/wp-json/soeteck/v1/${endpoint}?path=${encodeURIComponent(
            route.path,
          )}&lang=${lang}`;
          const content = await getJson(url);
          langDocs[lang] = toDoc(route, lang, content);
          ok++;
        } catch (e) {
          // 单条失败不阻塞构建
          console.warn(`[search-index] skip ${route.path}@${lang}: ${(e).message}`);
        }
      }
      if (ok > 0) results.set(route.path, langDocs);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, routes.length) }, () => worker()),
  );

  // 按语言汇总
  const docsByLang = Object.fromEntries(LANGS.map((l) => [l, []]));
  for (const langDocs of results.values()) {
    for (const lang of LANGS) {
      if (langDocs[lang]) docsByLang[lang].push(langDocs[lang]);
    }
  }

  // 写缓存 + 输出
  const cachePayload = {};
  for (const lang of LANGS) {
    const payload = { generated: routeDate || new Date().toISOString().slice(0, 10), lang, docs: docsByLang[lang] };
    cachePayload[lang] = payload;
    writeFileSync(resolve(OUT_DIR, `${lang}.json`), JSON.stringify(payload));
  }
  writeFileSync(cachePath, JSON.stringify({ date: routeDate, docs: cachePayload }));

  for (const lang of LANGS) console.log(`[search-index] ${lang}.json → ${docsByLang[lang].length} docs`);
  console.log('[search-index] done.');
}

run().catch((e) => {
  console.error('[search-index] FAILED:', e);
  process.exit(1);
});