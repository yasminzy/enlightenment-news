module.exports = {
  head: {
    title: "Enlightenment News",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Sample news website by Yasmin ZY"
      }
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
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ]
  },
  css: [
    "normalize.css/normalize.css",
    "aos/dist/aos.css",
    "~/assets/global.css"
  ],
  loading: { color: "#3f51b5" },
  build: {
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
  modules: ["@nuxtjs/axios"],
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    "~/plugins/vue-lazyload",
    "~/plugins/vue-moment",
    "~/plugins/vuex-router-sync"
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }
};
