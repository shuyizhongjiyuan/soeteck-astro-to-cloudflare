import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://soeteck.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap({
    // 草稿预览路由（draft-mode）不参与静态 sitemap；防御性过滤，防未来回归。
    filter: (page) => !page.includes('/preview'),
  })],
  vite: {
    server: {
      proxy: {
        '/wp-json': {
          target: 'https://cms.soeteck.com',
          changeOrigin: true,
        },
        '/resources': {
          target: 'https://cms.soeteck.com',
          changeOrigin: true,
        },
      },
    },
  },
});
