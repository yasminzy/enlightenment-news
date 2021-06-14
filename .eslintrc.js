module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: [],
  rules: {
    "arrow-parens": 0,
    "no-extra-semi": 0,
    "space-before-function-paren": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-indent": 0,
    "vue/html-self-closing": 0,
    "vue/no-v-html": 0,
    "vue/singleline-html-element-content-newline": 0,
    indent: 0,
    quotes: [2, "double"],
    semi: [2, "always"]
  }
};
