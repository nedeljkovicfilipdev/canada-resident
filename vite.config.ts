import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    svgr({
      exportAsDefault: true,
    }),
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
		host: '0.0.0.0',
		port: 3001,
		proxy: {
			'/api': {
				target: process.env.VITE_PROXY_SERVER || 'http://localhost:5100',
				changeOrigin: true,
				secure: false,
			},
		},
	},
})
