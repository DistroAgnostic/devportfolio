// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://justchetan.me",
  legacy: {
    collectionsBackwardsCompat: true,
  },
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
