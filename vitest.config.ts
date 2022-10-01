import path from "path";
import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueTypeImports from "vite-plugin-vue-type-imports";

export default defineConfig({
  plugins: [
    Vue(),
    VueTypeImports(),
    AutoImport({
      imports: ["vue"],
    }),
    Components({
      dirs: ["components"],
      directoryAsNamespace: true, // components/nested/Child.vue => <NestedChild />
      // directoryAsNamespace: false, // components/nested/NestedChild.vue => <NestedChild />
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
  root: ".",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
    },
  },
});
