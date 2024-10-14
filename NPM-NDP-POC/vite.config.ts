import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/npm/", 
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
