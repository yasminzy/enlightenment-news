import pkg from "./package";

export default {
  mode: "universal",
  head: {
    title: "Enlightenment News",
    meta: [
      { hid: "description", name: "description", content: pkg.description },
      {
        "http-equiv": "Content-Security-Policy",
        content: "upgrade-insecure-requests"
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
  loading: { color: "#3f51b5" },
  css: [
    "normalize.css/normalize.css",
    "aos/dist/aos.css",
    "~/assets/global.css"
  ],
  plugins: [
    "~/plugins/vue-lazyload",
    "~/plugins/vue-moment",
    "~/plugins/vuex-router-sync",
    { src: "~/plugins/aos", ssr: false }
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-import": {},
        "postcss-preset-env": {
          stage: 0,
          importFrom: "./assets/variables.css"
        },
        "rucksack-css": {}
      }
    }
  },
  router: {
    scrollBehavior: function() {
      return { x: 0, y: 0 };
    }
  },
  env: {
    VUE_APP_GUARDIAN_API_KEY: process.env.VUE_APP_GUARDIAN_API_KEY,
    VUE_APP_FIXER_API_KEY: process.env.VUE_APP_FIXER_API_KEY
  }
};
