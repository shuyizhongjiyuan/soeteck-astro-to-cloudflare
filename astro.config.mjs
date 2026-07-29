import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://soeteck.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
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
