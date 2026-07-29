/**
 * Soeteck Cloudflare Worker — Static Assets + CMS Proxy
 *
 * 路由规则：
 * 1. /resources/* → 代理到 cms.soeteck.com（保护主域图片 SEO 权重）
 * 2. 其他请求 → 服务静态资产（Astro 构建输出）
 */
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

    // Serve pre-built static assets
    return env.ASSETS.fetch(request);
  },
};
