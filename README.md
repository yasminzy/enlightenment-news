# 📰 Enlightenment News

[![Netlify Status](https://api.netlify.com/api/v1/badges/e53bd9dd-bced-4727-99aa-125508586dfc/deploy-status)](https://app.netlify.com/sites/enlightenment/deploys)

## 🙋‍♀️ Introduction

This is a Nuxt 3 news site demo.

| Item              | Link                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Animation         | [AOS](https://michalsnik.github.io/aos/)                                                     |
| API               | [The Guardian](https://open-platform.theguardian.com/)                                       |
| CSS               | [UnoCSS](https://unocss.antfu.me/), [sanitize.css](https://csstools.github.io/sanitize.css/) |
| Formatter         | [Prettier](https://prettier.io/)                                                             |
| Framework         | [Nuxt](https://v3.nuxtjs.org/)                                                               |
| Hosting           | [Netlify](https://www.netlify.com/)                                                          |
| Icon              | [Feather Icon](https://icones.js.org/collection/fe)                                          |
| Lazy loading      | [Vue Lazyload Next](https://github.com/caozhong1996/vue-lazyload-next)                       |
| Link catcher      | [Nuxt 3 Interpolation](https://github.com/daliborgogic/interpolation)                        |
| Linter            | [ESLint](https://eslint.org/)                                                                |
| Loading indicator | [NProgress](https://ricostacruz.com/nprogress/)                                              |
| Store             | [Pinia](https://pinia.vuejs.org/)                                                            |
| Utilities         | [VueUse](https://vueuse.org/)                                                                |

## 👩‍💻 Get Started

1. Clone this repo.

   ```bash
   git clone https://github.com/yasminzy/enlightenment-news.git
   ```

1. Install the packages.

   ```bash
   pnpm i
   ```

1. [Register for a developer key](https://bonobo.capi.gutools.co.uk/register/developer). Copy the API key.

1. Create a `.env` file in the project root and paste the key there.

   ```env
   GUARDIAN_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

1. Start the development or generate the pages for production.

   ```bash
   # Development
   pnpm dev

   # Production
   pnpm generate
   ```

## 📁 Page Explanation

The homepage is in `index.vue`. There are 2 sections: featured (`components/HomeFeatured.vue`) and top-rated (`components/HomeTopRated.vue`). Both use the store (`stores/home.js`).

The search page is in `search/`. The `index.vue` one only shows the search box (`components/SearchBox.vue`), which uses the store as well (`stores/search.js`). When performing a search, we will get to the `[query].vue` one.

The `[id].vue` is for the article. It is dynamic, like `[section].vue` and `[tag].vue`, but it is prioritized. It means that if it is not clear which one is the right place for the content, e.g. when refreshing the page, we will be pointed to `[id]`.

In `[id]`, we check if it is a section or tags page. We will go there if that is the case. And if the content is not accessible with our developer key, the page will be redirected to the original page on [The Guardian website](https://www.theguardian.com/us).

We catch the links to another The Guardian article and remove the original domain so we can show them on this website. However, we will get an error page with just this. So, we catch them with `[...slug].vue` and go to `[id].vue` again.
