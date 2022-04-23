import { defineNuxtConfig } from "nuxt"
import transformerDirective from "@unocss/transformer-directives"

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

  target: "static",

  ssr: false,

  typescript: {
    shim: false
  },

  unocss: {
    attributify: true,
    icons: true,
    typography: true,
    uno: true,
    transformers: [transformerDirective()],
    webFonts: {
      fonts: {
        sans: "Fira Sans:300,400,500",
        mono: "Fira Code"
      }
    },
    shortcuts: {
      card: "bg-stone-100 p-8 rounded-lg shadow",
      date: "mb-0 text-base text-stone-500",
      list: "list-none my-0 pl-0",
      pill: "bg-stone-500 block font-light max-w-fit mb-4 px-3 py-1 rounded-lg text-base text-stone-50"
    }
  },

  vite: {
    define: {
      "process.env": {}
    }
  }
})
