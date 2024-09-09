import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/webclient/": {
        target: "https://devtest1.nirmata.co/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\//, ""),
        headers: {
          authorization:
            "NIRMATA-API eLjlhsM+00QbaUbNPOvx/IZy/lIOOKp2PWc1hgLbAt8tndPbUUTYl1albqUtpwOe1Dfeci4BnEpo8L9wNZiOhg==",
        },
      },
    },
  },
});
