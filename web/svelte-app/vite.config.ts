import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  test:{
    globals: true,
    environment: "jsdom",
    include:['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude:['node_modules'] //Override here due to bazel rules_js pluggin serving stuff from rollup
  }
})
