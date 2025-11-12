import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && screenGraphPlugin(),
  ].filter(Boolean), 

  publicDir: "public",

  build: {
    outDir: "docs",
  },

  base: "/movinOnUp/",

  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));z