// scripts/perf-lighthouse.mjs — 本地 Lighthouse 诊断（对 dev server）
// 用法：node scripts/perf-lighthouse.mjs [--base=http://localhost:4321] [--paths=/en/] [--output=../docs/seo/global/performance/baselines]
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Git Bash/MSYS 会把 --paths=/en/ 的 /en/ 转成 C:/Program Files/Git/en/（路径转换），需还原，
// 否则拼出 "http://hostC:/Program Files/Git/en/" → Lighthouse INVALID_URL
const msysNormalize = (v) =>
  v.replace(/^[A-Za-z]:\/(?:Program Files\/Git|msys64)(\/.*)$/, '$1');
const arg = (name, def) => {
  const m = process.argv.find((a) => a.startsWith(`--${name}=`));
  return m ? msysNormalize(m.split('=')[1]) : def;
};

const base = arg('base', 'http://localhost:4321');
const paths = (arg('paths', '/en/,/en/solutions/') || '').split(',').filter(Boolean);
// 注意层级：scripts → astro-frontend → headless → 项目根，需上跳三级才到根仓库 docs/
const outputDir = arg('output', resolve(__dirname, '../../../docs/seo/global/performance/baselines'));

// --no-proxy-server：本机走系统代理(127.0.0.1:9674)会劫持 localhost 请求返回 502，
// 导致 Lighthouse 拿到错误页报 INVALID_URL。dev 页面请求全是 localhost 同源（CMS 图片走 Vite 服务端 proxy），全直连安全。
const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox', '--no-proxy-server'] });
try {
  for (const p of paths) {
    const url = base + p;
    const result = await lighthouse(url, {
      port: chrome.port,
      output: 'json',
      onlyCategories: ['performance'],
      logLevel: 'error',
    });
    const audits = result.lhr.audits;
    const pick = (id) => {
      const a = audits[id];
      return a ? { value: a.numericValue ?? null, displayValue: a.displayValue ?? null, score: a.score ?? null, details: a.details ?? null } : null;
    };
    const record = {
      id: p.replace(/[^a-z0-9-]/gi, '_'),
      url,
      strategy: 'mobile-local',
      date: new Date().toISOString(),
      field: null,
      lab: {
        LCP: pick('largest-contentful-paint'),
        INP: pick('interaction-to-next-paint'),
        CLS: pick('cumulative-layout-shift'),
        TTFB: pick('server-response-time'),
        TBT: pick('total-blocking-time'),
        FCP: pick('first-contentful-paint'),
        images: {
          'properly-size-images': pick('properly-size-images'),
          'uses-responsive-images': pick('uses-responsive-images'),
          'modern-image-formats': pick('modern-image-formats'),
          'offscreen-images': pick('offscreen-images'),
          'uses-optimized-images': pick('uses-optimized-images'),
          'total-byte-weight': pick('total-byte-weight'),
        },
      },
    };
    await mkdir(outputDir, { recursive: true });
    await writeFile(resolve(outputDir, `local-${record.id}.json`), JSON.stringify(record, null, 2));
    console.log(`OK ${p} — LCP=${record.lab.LCP?.displayValue} CLS=${record.lab.CLS?.displayValue}`);
  }
} finally {
  await chrome.kill();
}
