<template>
  <section class="section">
    <div v-show="home[sections[0]]" class="container" data-aos="fade">
      <div v-for="(item, index) in sections" :key="index" class="wrapper">
        <header>
          <nuxt-link
            :to="{ name: 'section', params: { section: item } }"
            class="a"
          >
            <h2 class="h2">{{ item.toUpperCase() }}</h2>
          </nuxt-link>
        </header>

        <div v-for="subitem in home[item]" :key="subitem.id">
          <nuxt-link :to="{ name: 'id', params: { id: subitem.id } }">
            <div
              :class="['bg', subitem.fields.thumbnail ? '' : 'dark']"
              :style="{
                backgroundImage: `url(${subitem.fields.thumbnail})`
              }"
            >
              <div class="div">
                <h3 class="h3">{{ subitem.webTitle }}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sections: ["business", "fashion", "film", "food"]
    };
  },
  computed: {
    home() {
      return this.$store.getters.home;
    }
  },
  async created() {
    // Get 1 news for each section
    for (let i = 0, j = this.sections.length; i < j; i++) {
      const data = {
        section: this.sections[i]
      };
      data.size = 1;
      await this.$store.dispatch("getHomeContent", data);
    }
  }
};
</script>

<style lang="postcss" scoped>
.section {
  background-color: var(--accent);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  color: var(--light);
  padding: var(--space) calc(var(--space) * 2);
}

.container {
  display: grid;
  margin: 0 auto;

  @media (--sm) {
    column-gap: var(--space);
    grid-template-columns: 1fr 1fr;
  }

  @media (--md) {
    max-width: 150ch;
  }
}

.a {
  color: var(--dark);
}

.h2 {
  font-size: 1.5rem;
}

.bg {
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: var(--shadow);

  &:hover {
    opacity: 0.75;
  }

  & .div {
    align-items: flex-end;
    background-color: rgba(33, 33, 33, 0.25);
    display: flex;
    height: 100%;
    min-height: 225px;
    padding: calc(var(--space) / 2);
    width: 100%;
  }

  &.dark {
    & .div {
      background-color: var(--dark);
    }
  }
}

.h3 {
  color: var(--light);
  font-size: 1.25rem;
  text-shadow: var(--shadow);
}
</style>
