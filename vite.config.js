import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ⚠️ Le nom exact du repo ici
  plugins: [react()],
})
