import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/assets': {
        target: 'https://devtest1.nirmata.co/npm',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, '/assets'),
      }
    }
  },
});
