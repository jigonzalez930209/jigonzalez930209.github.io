import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.glb',
    '**/*.gltf',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.css',
    '**/*.js',
    '**/*.json',
  ],
  base: '/jigonzalez930209.github.io/',
})
