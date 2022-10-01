# Vitest / Nuxt 3 / Vue 3 - Real world

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Lauch the tests


```bash
yarn dev
```

```bash
npm run dev
```

## How it works

### Vue tests

Vue tests are done through @vue/test-utils. It will allow you to test Vue.js components. Docs can be found [here](https://test-utils.vuejs.org/guide/).

### Nuxt tests

Nuxt tests are done through @nuxt/test-utils-edge. It will allow you to test NuxtJS / routes. Doc can be found [here](https://v3.nuxtjs.org/getting-started/testing/).

### Vitest config

Components autoload works through unplugin-vue-components/vite.

The use of vue api without import (toRefs, ref, computed, watch, ...) works through unplugin-auto-import/vite.

In this example, vite-plugin-vue-type-imports is used to enable you to import types and use them in your defineProps and defineEmits.
