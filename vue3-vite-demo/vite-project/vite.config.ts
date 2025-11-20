import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import BranchVersionVitePlugin from './vite-plugin/branch-version-vite-plugin'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    BranchVersionVitePlugin()
  ],
})
