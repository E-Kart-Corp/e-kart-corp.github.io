import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ekart-website/', // 👈 Ajoute cette ligne
  plugins: [react()],
})
