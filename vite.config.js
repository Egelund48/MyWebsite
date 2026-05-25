import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 1. ADD THIS IMPORT
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer' 

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    // 2. FIXED THE TYPO HERE (Optimizer instead of Optimization)
    ViteImageOptimizer({ 
      png: { quality: 85 }, 
      jpeg: { quality: 85 }
    })
  ],
  build: {
    assetsInlineLimit: 0, // Prevents small images from converting to base64 strings
  }
})