import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  build: {
    assetsInlineLimit: Infinity, // Inline all assets including images
    cssCodeSplit: false, // Don't split CSS
    rollupOptions: {
      output: {
        inlineDynamicImports: true // Inline dynamic imports
      },
      external: [], // Don't leave any external dependencies
    },
  },
})
