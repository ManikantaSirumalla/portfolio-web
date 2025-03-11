import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ 
    tailwindcss(),
    react()
  ],
  assetsInclude: ['**/*.JPG'], // Add this line to include .JPG files as assets
})
