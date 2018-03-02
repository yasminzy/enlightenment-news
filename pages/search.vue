<template>
<div>
  <search-box/>

  <div class="container">
    <aside class="wrapper" data-aos="flip-down">
      <div v-show="results.length">
        <p>
          Result articles related to <span>{{ query }}</span>
        </p>
      </div>
    </aside>

    <article class="wrapper">
      <ul class="content">
        <li class="hvr hvr-shadow" v-for="item in results" v-bind:key="item.id" data-aos="flip-up">
          <small>{{ item.webPublicationDate | moment("calendar") }}</small>

          <h3><nuxt-link v-bind:to="{ name: 'id-id', params: { id: item.id } }">{{ item.webTitle }}</nuxt-link></h3>

          <div class="img-wrapper">
            <nuxt-link v-bind:to="{ name: 'id-id', params: { id: item.id } }">
              <img class="hvr hvr-grow" v-bind:src="item.fields.thumbnail" v-bind:alt="item.webTitle">
            </nuxt-link>
          </div>

          <p v-html="item.fields.trailText"></p>
        </li>
      </ul>
    </article>
  </div>
</div>
</template>

<script>
import { urlize } from "~/assets/functions.js";
import SearchBox from "~/components/search-box";

export default {
  components: {
    SearchBox
  },
  computed: {
    query() {
      return this.$store.getters.searchQuery;
    },
    results() {
      return this.$store.getters.searchResults;
    }
  },
  async created() {
    if (this.query) {
      this.search();
    }
  },
  methods: {
    search() {
      let query = urlize(this.query);
      if (query) {
        this.$store.dispatch("getSearchResults", query);
      }
    },
    urlize
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/variables.css";

.container {
  display: grid;
  grid-gap: var(--space);
  min-height: 100vh;

  @media (--md) {
    grid-template-columns: 2fr 1fr;

    & aside {
      order: 1;
    }
  }

  @media (--xl) {
    grid-column-gap: calc(var(--space) * 2);
  }
}

.content {
  display: grid;
  grid-row-gap: var(--space);
  list-style-type: none;
  padding-left: 0;

  & > li {
    box-shadow: var(--shadow);
    width: 100%;
    padding: var(--space);

    & a {
      color: var(--black);
      display: block;
    }
  }

  @media (--sm) {
    grid-row-gap: calc(var(--space) * 2);
  }
}

aside {
  width: 100%;
}

span {
  font-weight: bold;
}

h3 {
  margin-top: 0;
}

img {
  margin: calc(var(--space) / 2) auto;
}
</style>
