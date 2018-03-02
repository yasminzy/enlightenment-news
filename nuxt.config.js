module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Enlightenment News",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Soedja challenge by Yasmin ZY" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,700"
      },
      {
        rel: "stylesheet",
        href:
          "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#2196F3" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: [
      require("postcss-import")(),
      require("postcss-cssnext")(),
      require("rucksack-css")()
    ],
    vendor: ["aos"]
  },
  css: [
    "normalize.css/normalize.css",
    "aos/dist/aos.css",
    "~/assets/global.css"
  ],
  plugins: [
    { src: "~/plugins/aos.js", ssr: false },
    "~/plugins/vuex-router-sync.js",
    "~/plugins/vue-moment.js"
  ],
  modules: ["@nuxtjs/axios"],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
};
