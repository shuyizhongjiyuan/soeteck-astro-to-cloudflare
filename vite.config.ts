import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // 代理API请求到本地WordPress
      '/wp-json': {
        target: 'http://soeteck.local.test',
        changeOrigin: true,
      },
      // 代理媒体资源到本地WordPress的resources目录
      '/resources': {
        target: 'http://soeteck.local.test',
        changeOrigin: true,
      },
    },
  },
});
