<template>
  <div class="div wrapper">
    <SearchBox />

    <div class="posts-container">
      <aside class="aside wrapper" data-aos="fade">
        <div v-if="results.length">
          <p>
            Result articles related to <span class="span">{{ query }}</span>
          </p>
        </div>

        <div v-else class="div mh-100 wrapper" data-aos="fade">
          Loading...
        </div>
      </aside>

      <article class="wrapper">
        <ul class="content">
          <PostListItem
            v-for="item in results"
            :key="item.id"
            :date="item.webPublicationDate"
            :identifier="item.id"
            :img="item.fields.thumbnail"
            :tags="item.tags"
            :title="item.webTitle"
            :trail-text="item.fields.trailText"
          />
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import { toKebabCase } from "~/assets/js/functions";
import PostListItem from "~/components/PostListItem";
import SearchBox from "~/components/SearchBox";

export default {
  components: {
    PostListItem,
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
      const query = toKebabCase(this.query);
      if (query) {
        this.$store.dispatch("getSearchResults", query);
      }
    },
    toKebabCase
  }
};
</script>

<style lang="postcss" scoped>
.div {
  @media (min-width: 992px) {
    width: 992px;
  }
}

.aside {
  width: 100%;

  @media (--md) {
    order: 1;
  }
}

.span {
  font-weight: bold;
}
</style>
