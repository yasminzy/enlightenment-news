<template>
  <nav id="top">
    <div class="wrapper" data-aos="fade">
      <h1><nuxt-link to="/">ENLIGHTENMENT</nuxt-link></h1>

      <ul class="categories">
        <li v-for="(item, index) in categories" :key="index">
          <nuxt-link :to="'/' + (item.to || urlize(item))">{{
            item.label || item
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { urlize } from "@/assets/functions.js";

export default {
  data() {
    return {
      categories: [
        "Business",
        "Fashion",
        "Film",
        "Food",
        "Games",
        "Music",
        "Science",
        "Technology",
        "World"
      ]
    };
  },
  methods: {
    urlize
  }
};
</script>

<style lang="postcss" scoped>
nav {
  color: var(--white);
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  box-shadow: var(--shadow);
}

a {
  color: var(--white);
}

h1 {
  text-align: center;
  margin: 0.5rem 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: right;

  @media (--lg) {
    justify-content: space-between;
  }

  & li {
    & a {
      display: block;
      padding: 0.5rem 1rem;

      @media (--lg) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
