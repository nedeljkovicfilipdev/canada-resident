import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0', // Allows external access to the dev server
    proxy: {
      '/api/': {
        target: process.env.VITE_PROXY_SERVER || 'http://localhost:3000', // Update target port to 3000
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: false, // Accepts self-signed certificates
      },
    },
  },
});
