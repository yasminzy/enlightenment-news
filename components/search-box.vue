<template>
<div data-aos="fade">
  <form>
    <input type="text" placeholder="What are you looking for?" v-bind:value="query" v-on:input="updateQuery" required>

    <div v-if="this.$store.state.route.path !== '/search'">
      <button v-on:click.prevent="$router.push('/search')">
        <i class="icon ion-md-search"></i>
      </button>
    </div>

    <div v-else>
      <button v-on:click.prevent="search">
        <i class="icon ion-md-search"></i>
      </button>
    </div>
  </form>
</div>
</template>

<script>
import { urlize } from "~/assets/functions.js";

export default {
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

form {
  display: grid;
  grid-template-columns: 5fr minmax(max-content, 1fr);
  align-items: stretch;
  margin: var(--space) 0;
}

button,
input {
  color: inherit;
  font: inherit;
  height: 100%;
  margin: 0;
}

input {
  background-color: var(--white);
  border: 1px solid var(--grey);
  line-height: inherit;
  padding: calc(var(--space) / 4) calc(var(--space) / 2);
  width: 100%;

  &:focus {
    border: 1px solid var(--primary);
    outline: 0;
  }
}

a,
button {
  background-color: var(--primary);
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: calc(var(--space) / 4) calc(var(--space) / 2);
  text-align: center;
  width: 100%;
}
</style>
