import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ponytail: base '/cv-nandz/' because this is a *project* Pages site
// (nandz.my.id domain expired — parked under the repo path for now)
export default defineConfig({
  plugins: [react()],
  base: '/cv-nandz/',
})
