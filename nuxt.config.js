export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "Enlightenment News",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,700"
      }
    ],
    script: [{ src: "https://unpkg.com/ionicons/dist/ionicons.js", body: true }]
  },
  loading: { color: "#Hex	3F51B5" },
  css: [
    "normalize.css/normalize.css",
    "aos/dist/aos.css",
    "@/assets/global.css"
  ],
  plugins: [
    "@/plugins/vue-lazyload",
    "@/plugins/vue-moment",
    "@/plugins/vuex-router-sync",
    { src: "@/plugins/aos", ssr: false }
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      },
      plugins: {
        "postcss-import": {},
        "postcss-preset-env": {
          stage: 0,
          importFrom: "./assets/variables.css"
        },
        "rucksack-css": {}
      }
    },
    extend(config, ctx) {}
  },
  router: {
    scrollBehavior: function() {
      return { x: 0, y: 0 };
    }
  },
  env: {
    VUE_APP_FIXER_API_KEY: process.env.VUE_APP_FIXER_API_KEY,
    VUE_APP_GUARDIAN_API_KEY: process.env.VUE_APP_GUARDIAN_API_KEY
  }
};
