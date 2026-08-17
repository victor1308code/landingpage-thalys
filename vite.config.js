import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173, // Porta alternativa garantida (evita conflito com a 3000)
    open: false,
  },
  preview: {
    port: 5174,
  }
})
