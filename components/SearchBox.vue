<template>
  <form class="form" data-aos="fade">
    <input
      :value="query"
      class="input"
      placeholder="What are you looking for?"
      required
      type="text"
      @input="updateQuery"
    />

    <div
      v-if="
        !this.$store.state.route || this.$store.state.route.path !== '/search'
      "
    >
      <button class="button" @click.prevent="$router.push('/search')">
        <Search-Icon />
      </button>
    </div>

    <div v-else>
      <button class="button" @click.prevent="search">
        <Search-Icon />
      </button>
    </div>
  </form>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";
import { toKebabCase } from "~/assets/js/functions";

export default {
  components: {
    SearchIcon
  },
  computed: {
    query() {
      return this.$store.getters.searchQuery;
    }
  },
  methods: {
    updateQuery(event) {
      this.$store.commit("updateQuery", event.target.value);
    },
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
.form {
  align-items: stretch;
  display: grid;
  grid-template-columns: 5fr minmax(max-content, 1fr);
  margin: var(--space) auto;
}

.button,
.input {
  color: inherit;
  font: inherit;
  height: 100%;
  margin: 0;
}

.input {
  background-color: var(--light);
  border: 1px solid var(--accent-2);
  line-height: inherit;
  padding: calc(var(--space) / 4) calc(var(--space) / 2);
  width: 100%;

  &:focus {
    border-style: dashed;
    outline: 0;
  }
}

.button {
  background-color: var(--dark);
  border: 0;
  color: var(--light);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: calc(var(--space) / 4) calc(var(--space) / 2);
  text-align: center;
  width: 100%;

  &:hover {
    background-color: var(--accent-2);
  }
}
</style>
