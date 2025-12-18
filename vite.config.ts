import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    nodePolyfills({ protocolImports: true }),
    react(),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6.js',
      process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
      util: 'rollup-plugin-node-polyfills/polyfills/util',
    },
  },
});
