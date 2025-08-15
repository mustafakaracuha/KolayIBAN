// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // yeni versiyon çıkınca otomatik yükle
      workbox: {
        skipWaiting: true, // SW hemen aktif olsun
        clientsClaim: true, // Tüm sekmelerde geçerli olsun
        cleanupOutdatedCaches: true // eski cache'leri sil
      }
    })
  ],
  build: {
    outDir: 'dist'
  }
})
