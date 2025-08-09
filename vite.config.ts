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
  outDir: "dist",

  base: mode === "development" ? "/" : "/movinOnUp/",

  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));