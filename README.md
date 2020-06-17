# 📰 Enlightenment News

[![Netlify Status](https://api.netlify.com/api/v1/badges/e53bd9dd-bced-4727-99aa-125508586dfc/deploy-status)](https://app.netlify.com/sites/enlightenment/deploys)

## 🙋‍♀️ Introduction

This is a sample news website I build with [Nuxt](https://nuxtjs.org/) and host at [Netlify](https://www.netlify.com/)💖. I use [Vuex]() to get news from [The Guardian](https://open-platform.theguardian.com). As a little touch, I also include exchange rates for some currencies from [Exchange Rates](https://exchangeratesapi.io/).

For the styling, I only use [normalize.css](https://necolas.github.io/normalize.css/) as the base and write custom CSS with [PostCSS](https://postcss.org/) plugins. I use [AOS](https://michalsnik.github.io/aos/) and [Feather Icons](https://feathericons.com/) for the animation and icon pack, respectively. Furthermore, I lazyload images with [Lazyload](http://hilongjw.github.io/vue-lazyload/) and use [Moment](http://www.momentjs.com/) for time formatting. Last but not least, I use [Nuxt Interpolation](https://github.com/daliborgogic/nuxt-interpolation) to make relative links rendered with `v-html` use the router.

This is meant as a demonstration of how to use the building blocks above. Enjoy! 😄

## 👩‍💻 Get Started

> I use Node.js v14.4.0 and npm v6.14.5.

```bash
# Clone this repo
git clone https://github.com/yasminzy/enlightenment-news.git

# Install the dependencies
cd enlightenment-news
npm i
```

- [Register developer key](https://bonobo.capi.gutools.co.uk/register/developer). Copy the API key.

- Create a `.env` file in the project root and paste the key there. This is an example.

```env
NUXT_ENV_GUARDIAN_API_KEY=a0bc1234-d5ef-6789-0ghi-1j2k34567lm8
```

- Start the development or generate the pages for production

```bash
# For development. Open localhost:3000
npm run dev

# For production. Host the /dist
npm run generate
```

## 📁 Folders

Below are some important takeaways from each folder.

### `/assets/`

I have 2 folders here, each for CSS and JS:

- `/css/global.css` for global basic styling. I include `.hvr-grow` from [Hover CSS](https://github.com/IanLunn/Hover) because I often use that one as well.
- `/css/variables.css` for the color, spacing, and breakpoints for this project. This is placed on top of the global CSS above. Here is a snippet:

  ```css
  :root {
    /* 1st part: color palette */
    --apricot: #ffcdb2;

    /* 2nd part: variables for the project */
    --accent: var(--apricot);
    --shadow: 0 5px 5px rgba(33, 33, 33, 0.25);
    --space: 2rem;
  }

  /* 3rd part: breakpoints */
  @custom-media --sm (width >= 576px);
  @custom-media --md (width >= 786px);
  ```

- `/js/functions.js` mainly for getting the URL needed to make API requests. Some snippet:

  ```js
  export function getHomeContentURL(section, size) {
    return `https://content.guardianapis.com/search?section=${section}&page-size=${size}&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`;
  }

  export function getLatestExchangeRateURL(options) {
    return `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?${options}`;
  }
  ```

### `/components/`

Below are the important `.vue` components here.

- `AppFooter` and `AppNav` are the site's footer and navigation bar, respectively.
- `HomeFeatured`, `HomeFeaturedSimple`, and `HomeTopRated` are the components for each section in the homepage (`pages/index.vue`)
- `PostListItem` is a news card to be used in `_section`, `_tag`, and `search` pages.
- `SearchBox` is the component to save the query entered. When the search button is pushed, we will go to the `/search` page to get the result.

### `/layouts/`

I only have `default.vue` here. The components I include here are visible on every page.

### `/pages/`

The important `.vue` files here are:

- `_id` for the dynamic article page.
- `_section` for the dynamic category page. It can be `/business`, `/fashion`, `/film`, etc.
- `_tag` for the dynamic "related" page.
- `index` for the homepage consisting of page sections you can find in the `components` folder.
- `search` for searching articles related to the input query.

The rest is just extra pages to make it look more like an actual news site.

As you can see, I have 3 dynamic pages at the same folder level. When navigating "normally" - start from home and so on, this is not an issue.

For example, if I want to go to the article page, I only need to tell Nuxt that the component for that is the one named `id`, and since `id` itself is dynamic, I give the actual value through the parameter like so:

```html
<nuxt-link :to="{ name: 'id', params: { id: identifier } }" class="a">
  {{ title }}
</nuxt-link>
```

But what if the navigation starts from one of those dynamic pages? For example when reloading `/food`, which is the `_section` page. Then, Nuxt will load one of these dynamic pages, without knowing the correct one. In this case, because the default is `_id`, it will throw an error because it does not have the necessary data for showing an article page.

That is why I write some scripts for the fallback. The order is:

1. `_id`
2. `_section`
3. `_tag`

In `/pages/_id.vue`, check if we have the data for an article. If not, go to the route named `section` or redirect to the original The Guardian page. We need to do redirect if we happen to click a link to a commercial article. I use the free developer key which has some access limitation.

```js
created() {
    let route = this.$store.state.route.path.replace("/", "");

    // If the data is not undefined,
    if (typeof this.data !== "undefined") {
      // but we do not have the article content,
      if (!this.data.response.content) {
        // go to the _section page
        this.$router.push({
          name: "section",
          params: { section: route }
        });
      }
    }
    // If the data is undefined because the content is commercial,
    else if (process.client) {
      // fix the route
      route = route.replace(/%2F/g, "/");

      // then go to the real page
      window.location.href = `https://www.theguardian.com/${route}`;
    }
  }
```

In `/pages/_section.vue`, check if we have the data for a category page. If not, go to the route named `tag`.

```js
async created() {
    // Get articles related to the selected section
    let route = this.$store.state.route.path.replace("/", "");

    // If the route does not have a % symbol,
    if (!route.includes("%")) {
      // get the content for this section
      await this.$store.dispatch("getSectionContent", route);
    }
    // If the route has that symbol, but it is not a link to an article,
    else {
      // fix the route
      route = route.replace(/%252F/g, "/");

      // then go to the _tag page
      this.$router.push({
        name: "tag",
        params: { tag: route }
      });
    }
  }
```

We can organize the pages differently so Nuxt can distinguish the pages easily in the first place, but I choose to do it like this because I want to match the URL like it is in the Guardian site.

### `/plugins/`

I use 5 `.js` plugins:

- `aos.client` for the initiating animation from AOS. The `.client` suffix means `ssr: false` in `/nuxt.config.js`.
- `nuxt-interpolation.client` to use `nuxt-link` instead of `a` when using `v-html`. The original module does not provide options so I just copy and tweak it a bit before registering it as a plugin.
- `vue-lazyload` for using VueLazyload to lazyload images.
- `vue-moment` for using Vue Moment to format the time.
- `vuex-router-sync` for syncing the store and router.

### `/static/`

This is where I place the site's favicon: `favicon.ico`.

### `/store/`

The store is in the `index.js` file here. There are 6 parts. I include some snippets as an example.

1. `functions`: Import this from `/assets/js/functions.js`.

```js
import { getHomeContentURL } from "~/assets/js/functions";
```

2. `const`: I only have one that is a header object for Axios requests.

```js
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};
```

3. `state`: I structure this in a way that helps me get the data easily. Everything except the article and tag search data is stored here. Those two can be anything so I choose to make them manage their data.

```js
export const state = () => ({
  home: {
    business: [],
    exchangeRates: [],
    fashion: [],
    film: [],
    food: [],
    games: [],
    music: [],
    science: [],
    technology: [],
    topRated: []
  }
});
```

4. `getters`: The component/page that needs the stored data can get it through one of these.

```js
export const getters = {
  home(state) {
    return state.home;
  }
};
```

5. `mutations`: These are for changing aka mutating the state through `commit`. For example, when the page first load, we do not have anything in the `state`. But when we receive data, we `commit` that change so that it can be stored in the `state`.

```js
export const mutations = {
  home(state, payload) {
    state.home[payload.section] = payload.content;
  }
};
```

6. `actions`: These are for making requests. After receiving the data, it is committed to the `state`.

```js
export const actions = {
  async getHomeContent({ commit }, arg) {
    const response = await this.$axios.$get(
      getHomeContentURL(arg.section, arg.size),
      config
    );
    const data = {
      content: response.response.results,
      section: arg.section
    };
    commit("home", data);
  }
};
```

## 📄 Files

Below are some files I would like to talk a bit about.

### `/.env`

This is a secret and therefore not pushed to Github. The environment variable starts with `NUXT_ENV_` so it can be injected automatically by Nuxt.

### `/.eslintrc.js`

From the Guardian API, we get `html` that needs to be rendered. To remove the warning from using `v-html`, I turn off the `no-v-html` rule here.

```js
module.exports = {
  rules: { "vue/no-v-html": "off" }
};
```

### `/.prettierrc`

This is my usual Prettier setting.

```json
{
  "arrowParens": "always",
  "endOfLine": "auto",
  "trailingComma": "none"
}
```

### `/nuxt.config.js`

This is where we add the styles and register plugins and modules. In the `build` part, we can change the settings for PostCSS. For example, here I use `stage: 1` because I want to use the features like [custom media queries](https://preset-env.cssdb.org/features#custom-media-queries) and [nesting rules](https://preset-env.cssdb.org/features#nesting-rules) which are at that stage.

```js
export default {
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
          stage: 1,
          importFrom: "./assets/css/variables.css"
        },
        "rucksack-css": {}
      }
    }
  }
};
```
