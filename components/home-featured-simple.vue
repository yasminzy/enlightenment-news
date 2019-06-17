<template>
  <section>
    <div class="container wrapper">
      <div v-for="(item, index) in sections" :key="index" class="wrapper">
        <header>
          <nuxt-link :to="'/' + item">
            <h2 data-aos="fade">{{ item.toUpperCase() }}</h2>
          </nuxt-link>
        </header>

        <div
          v-for="subitem in home[item]"
          :key="subitem.id"
          data-aos="fade-up-right"
        >
          <nuxt-link :to="{ name: 'id-id', params: { id: subitem.id } }">
            <div
              :class="['bg', subitem.fields.thumbnail ? '' : 'dark']"
              :style="{
                backgroundImage: 'url(' + subitem.fields.thumbnail + ')'
              }"
            >
              <div>
                <h3>{{ subitem.webTitle }}</h3>
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
      sections: ["world", "science", "technology", "business"]
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

<style scoped>
section {
  background-color: var(--grey-100);
  color: var(--white);
}

.container {
  display: grid;
  gap: var(--space);
  min-height: 100vh;

  @media (--sm) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(auto, max-content);
  }

  @media (--xl) {
    gap: calc(var(--space) * 2);
  }

  & > div {
    height: auto;
  }
}

a {
  color: var(--black);
}

.bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: var(--shadow);

  &:hover {
    opacity: 0.75;
  }

  & div {
    display: flex;
    align-items: flex-end;
    min-height: 225px;
    padding: calc(var(--space) / 2);
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.25);
  }

  &.dark {
    & div {
      background-color: var(--black);
    }
  }
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  color: var(--white);
  text-shadow: var(--shadow);
}
</style>
