export default {
  target: "static",

  head: {
    title: "Enlightenment News",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "News site consuming Guardian API"
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
    "@/plugins/aos.client",
    "@/plugins/nuxt-interpolation.client",
    "@/plugins/vue-lazyload",
    "@/plugins/vue-moment",
    "@/plugins/vuex-router-sync"
  ],

  components: true,

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
