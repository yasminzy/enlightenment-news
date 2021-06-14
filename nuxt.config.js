export default {
  target: "static",

  head: {
    title: "Enlightenment News",

    htmlAttrs: {
      lang: "en"
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "News site consuming the Guardian API"
      }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Fira+Mono&family=Fira+Sans:wght@400;600&display=swap"
      }
    ]
  },

  loading: { color: "#ffcdb2" },

  css: ["normalize.css/normalize.css", "@/assets/css/global.css"],

  plugins: [
    "@/plugins/aos.client.js",
    "@/plugins/nuxt-interpolation.client.js",
    "@/plugins/vue-lazyload.js",
    "@/plugins/vue-moment.js",
    "@/plugins/vuex-router-sync.js"
  ],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxt/postcss8"],

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],

  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        "postcss-preset-env": {
          stage: 1,
          importFrom: "./assets/css/variables.css"
        },
        "rucksack-css": {}
      }
    }
  }
};
