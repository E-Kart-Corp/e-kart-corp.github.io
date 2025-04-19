import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Site_vitrine/', // ⚠️ Le nom exact du repo ici
  plugins: [react()],
})
