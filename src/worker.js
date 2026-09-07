/**
 * Soeteck Cloudflare Worker — Static Assets + CMS Proxy
 *
 * 路由规则：
 * 1. /resources/* → 代理到 cms.soeteck.com（保护主域图片 SEO 权重）
 * 2. /_geo → 返回访客国家码（地区分层合规，供同意横幅使用）
 * 3. 其他请求 → 服务静态资产（Astro 构建输出）
 */
const ALLOWED_ORIGIN = 'https://soeteck.com';

// 2026-09-07 上线清理批次：旧站垃圾 URL → 410 Gone（出索引）。
// Workers Static Assets `_redirects` 不支持 410 状态码（仅 301/302/303/307/308/200，
// 且 destination 必填），故在 Worker 层直接返回 410（先于 ASSETS 命中）。
// 将来对应页面恢复上线时，移除相应前缀即可（如 earthfirst）。
const GONE_PREFIXES = [
  // FAQ 子页（未开工）
  '/en/faq/after-sales-warranty', '/es/faq/after-sales-warranty', '/ru/faq/after-sales-warranty', '/pt/faq/after-sales-warranty', '/zh/faq/after-sales-warranty',
  '/en/faq/orders-shipping', '/es/faq/orders-shipping', '/ru/faq/orders-shipping', '/pt/faq/orders-shipping', '/zh/faq/orders-shipping',
  '/en/faq/technical-customization', '/es/faq/technical-customization', '/ru/faq/technical-customization', '/pt/faq/technical-customization', '/zh/faq/technical-customization',
  // earthfirst（ESG 页规划未开工；上线时同 URL 恢复）
  '/en/news-and-insights/earthfirst', '/es/news-and-insights/earthfirst', '/ru/news-and-insights/earthfirst', '/pt/news-and-insights/earthfirst', '/zh/news-and-insights/earthfirst',
  // uncategorized（WP 默认垃圾分类归档）
  '/en/uncategorized', '/es/uncategorized', '/ru/uncategorized', '/pt/uncategorized', '/zh/uncategorized',
];

function isGonePath(pathname) {
  return GONE_PREFIXES.some((p) => pathname.startsWith(p));
}

// Shared CORS headers for /_geo responses
function geoCorsHeaders(request) {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  headers.set('Vary', 'Origin');
  return headers;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 旧站垃圾 URL → 410 Gone（详见 GONE_PREFIXES 说明；先于静态资产命中）
    if (isGonePath(url.pathname)) {
      return new Response('Gone', { status: 410, headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }

    // Proxy /resources/ to CMS so all images live under the main domain
    if (url.pathname.startsWith('/resources/')) {
      const cmsUrl = `https://cms.soeteck.com${url.pathname}${url.search}`;
      // Preserve headers the CMS might need (e.g., caching)
      const proxyHeaders = new Headers(request.headers);
      proxyHeaders.delete('cf-connecting-ip'); // Don't leak visitor IP
      return fetch(cmsUrl, {
        method: request.method,
        headers: proxyHeaders,
        body: request.method === 'GET' || request.method === 'HEAD' ? null : request.body,
      });
    }

    // /_geo → visitor country code for regional consent gating
    if (url.pathname === '/_geo') {
      if (request.method === 'OPTIONS') {
        // Preflight
        const preflightHeaders = geoCorsHeaders(request);
        preflightHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        preflightHeaders.set('Access-Control-Allow-Headers', 'Content-Type');
        return new Response(null, { status: 204, headers: preflightHeaders });
      }

      const country = request.headers.get('CF-IPCountry'); // may be null
      return new Response(JSON.stringify({ country }), {
        headers: {
          'Content-Type': 'application/json',
          ...geoCorsHeaders(request),
        },
      });
    }

    // Serve pre-built static assets
    // 缺失资产（无 asset、无 _redirects 命中）会使 ASSETS.fetch 抛异常 → error 1101 → 500。
    // 2026-09-04 修复：catch 后返回品牌 404（/404 由 Auto-trailing-slash 映射到 404.html），全站死链回归真 404。
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      const notFound = await env.ASSETS.fetch(new Request(new URL('/404', url.origin)))
        .catch(() => null);
      if (notFound && notFound.ok) {
        return new Response(notFound.body, {
          status: 404,
          headers: { 'content-type': notFound.headers.get('content-type') || 'text/html; charset=utf-8' },
        });
      }
      return new Response('Not Found', {
        status: 404,
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      });
    }
  },
};
