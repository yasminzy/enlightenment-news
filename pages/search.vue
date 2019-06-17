<template>
  <div>
    <search-box />

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
          <li
            v-for="item in results"
            :key="item.id"
            class="hvr hvr-shadow"
            data-aos="flip-up"
          >
            <small>{{ item.webPublicationDate | moment("calendar") }}</small>

            <h3>
              <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">
                {{ item.webTitle }}
              </nuxt-link>
            </h3>

            <div class="img-wrapper">
              <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">
                <img
                  v-lazy="item.fields.thumbnail"
                  :alt="item.webTitle"
                  class="hvr hvr-grow"
                />
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
      await this.search();
    }
  },
  methods: {
    search() {
      const query = urlize(this.query);
      if (query) {
        this.$store.dispatch("getSearchResults", query);
      }
    },
    urlize
  }
};
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--space);
  min-height: 100vh;

  @media (--md) {
    grid-template-columns: 2fr 1fr;

    & aside {
      order: 1;
    }
  }

  @media (--xl) {
    column-gap: calc(var(--space) * 2);
  }
}

.content {
  display: grid;
  row-gap: var(--space);
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
    row-gap: calc(var(--space) * 2);
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
