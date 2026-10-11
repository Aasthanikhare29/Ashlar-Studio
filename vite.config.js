import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // swiper ships CSS imports that Node can't load during the prerender build
  ssr: { noExternal: ['swiper'] },
})
