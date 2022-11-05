export default defineNuxtConfig({
  css: ["@/assets/css/base.css", "@/assets/css/nprogress.css"],

  modules: [
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "nuxt3-interpolation"
  ],

  runtimeConfig: {
    public: {
      guardianApiKey: process.env.GUARDIAN_API_KEY
    }
  },

  ssr: false,

  typescript: {
    shim: false
  },

  vite: {
    define: {
      "process.env": {}
    }
  }
})
