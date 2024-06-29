import path from "path";
import SiteMap from "vite-plugin-sitemap";
import { purgeCss } from "vite-plugin-tailwind-purgecss";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), purgeCss(), SiteMap({ hostname: "https://zsl.tw" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: true,
    cssMinify: true,
  },
});
