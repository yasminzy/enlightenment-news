/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],

  rules: {
    "no-undef": 0,
    "vue/multi-word-component-names": 0,
    "vue/no-v-html": 0
  }
}
