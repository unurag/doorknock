import { defineConfig } from 'vite'
import Path from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src')
    }
  }
})
