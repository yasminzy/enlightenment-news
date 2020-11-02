<template>
  <nav id="top" class="nav">
    <div class="wrapper" data-aos="fade">
      <h1 class="h1"><nuxt-link to="/" class="a">ENLIGHTENMENT</nuxt-link></h1>

      <ul class="ul">
        <li v-for="(item, index) in categories" :key="index">
          <nuxt-link
            :to="{ name: 'section', params: { section: toKebabCase(item) } }"
            class="a"
          >
            {{ item }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { toKebabCase } from "~/assets/js/functions";

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
    toKebabCase
  }
};
</script>

<style lang="postcss" scoped>
.nav {
  color: var(--light);
  background: linear-gradient(to right, var(--dark), var(--accent));
  background-color: var(--dark);
  box-shadow: var(--shadow);
}

.h1 {
  margin: 0.5rem 0;
  text-align: center;
}

.a {
  color: var(--light);
}

.ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding-left: 0;
  text-align: right;

  @media (--lg) {
    justify-content: space-between;
  }

  & .a {
    display: block;
    padding: 0.5rem 1rem;

    @media (--lg) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
}
</style>
