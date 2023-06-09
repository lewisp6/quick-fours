import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/games/quickfours/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "/Users/lewispearson/Projects/personal/lewisvuitton/games/quickfours",
  },
  test: {
    globals: true,
    setupFilesAfterEnv: ["jest-dom/extend-expect"],
  },
});
