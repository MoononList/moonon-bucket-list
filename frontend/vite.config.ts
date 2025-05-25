import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      styles: path.resolve(__dirname, "./src/styles"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
});
