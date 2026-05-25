import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',   // 👈 修改为根路径，用于服务器部署
  plugins: [
    react(),
    tailwindcss(),
  ],
})