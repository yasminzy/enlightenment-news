import { defineNuxtPlugin } from "#app"
import VueLazyload from "vue-lazyload"

const error = new URL("../assets/img/error.png", import.meta.url).href
const loading = new URL("../assets/img/loading.png", import.meta.url).href

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    error,
    loading
  })
})
