// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  // Disable this line and `yarn dev` command will stop working
  modules: ["vite-plugin-vue-type-imports/nuxt"],
});
