import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import BranchVersionVitePlugin from './vite-plugin/branch-version-vite-plugin'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "types": path.join(__dirname, "types"),
    }
  },
  plugins: [
    vue(),
    VueDevTools(),
    BranchVersionVitePlugin()
  ],
})
