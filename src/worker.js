/**
 * Soeteck Cloudflare Worker — Static Assets + CMS Proxy
 *
 * 路由规则：
 * 1. /resources/* → 代理到 cms.soeteck.com（保护主域图片 SEO 权重）
 * 2. /_geo → 返回访客国家码（地区分层合规，供同意横幅使用）
 * 3. 其他请求 → 服务静态资产（Astro 构建输出）
 */
const ALLOWED_ORIGIN = 'https://soeteck.com';

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
