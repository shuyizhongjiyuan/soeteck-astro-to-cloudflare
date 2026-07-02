import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://soeteck.com',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    server: {
      proxy: {
        '/wp-json': {
          target: 'http://soeteck.local.test',
          changeOrigin: true,
        },
        '/resources': {
          target: 'http://soeteck.local.test',
          changeOrigin: true,
        },
      },
    },
  },
});
