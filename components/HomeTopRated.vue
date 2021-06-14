<template>
  <section class="section">
    <div v-if="home.topRated[0]" class="container wrapper">
      <h2>Top Rated</h2>

      <ul class="ul">
        <li v-for="item in home.topRated" :key="item.id" class="li">
          <p>
            <nuxt-link :to="{ name: 'id', params: { id: item.id } }" class="a">
              {{ item.webTitle }}
            </nuxt-link>
          </p>
        </li>
      </ul>
    </div>

    <div v-else class="mh-100 wrapper" data-aos="fade">Loading...</div>
  </section>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.home;
    }
  },
  async created() {
    await this.$store.dispatch("getHomeTopRatedContent");
  }
};
</script>

<style lang="postcss" scoped>
.section {
  padding: var(--space) calc(var(--space) * 2);
}

.container {
  display: block;
  margin: 0 auto;
  max-width: 80ch;

  & h2 {
    text-align: center;
  }
}

.ul {
  list-style-type: none;
  padding-left: 0;
}

.li {
  & .a {
    color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(var(--space) / 2) 0;
  }

  &:not(:first-child) {
    border-top: 1px solid var(--dark);
  }
}
</style>
