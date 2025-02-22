import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import GlobalProvide from 'vite-plugin-global-provide'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    GlobalProvide({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
})