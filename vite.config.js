import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mariaNcanghe/', // For GitHub Pages
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
})
