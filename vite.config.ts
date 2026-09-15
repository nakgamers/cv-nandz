import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// ponytail: base '/' because this is a GitHub *user* Pages site (nandz.my.id)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
