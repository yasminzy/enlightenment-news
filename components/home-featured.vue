<template>
  <section class="container wrapper" data-aos="fade-right">
    <div v-for="(item, index) in sections" :key="index" class="wrapper">
      <header>
        <nuxt-link :to="'/' + item">
          <h3>{{ item.toUpperCase() }}</h3>
          <ion-icon name="arrow-dropright" />
        </nuxt-link>
      </header>

      <hr />

      <ul>
        <li v-for="subitem in home[item]" :key="subitem.id">
          <nuxt-link :to="{ name: 'id-id', params: { id: subitem.id } }">
            <div class="img-wrapper">
              <img
                v-lazy="subitem.fields.thumbnail"
                :alt="subitem.webTitle"
                class="hvr hvr-grow"
              />
            </div>

            <h4>{{ subitem.webTitle }}</h4>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sections: ["games", "music", "science", "technology"]
    };
  },
  computed: {
    home() {
      return this.$store.getters.home;
    }
  },
  async created() {
    // Get 3 news for each section
    for (let i = 0, j = this.sections.length; i < j; i++) {
      const data = {
        section: this.sections[i]
      };
      data.size = 3;
      await this.$store.dispatch("getHomeContent", data);
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--space);

  @media (--sm) {
    grid-template-columns: 1fr 1fr;
  }

  @media (--xl) {
    gap: calc(var(--space) * 2);
  }
}

header a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

i {
  margin-bottom: 0.75rem;
}

a {
  color: var(--black);
}

hr {
  border-color: var(--primary);
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(var(--space) / 2) var(--space);
  }

  & h4 {
    font-size: 1.25rem;
    margin: 0;
  }

  & img {
    margin-bottom: calc(var(--space) / 2);
  }

  &:not(:first-child) {
    border-top: 1px solid var(--grey);

    & img {
      display: none;
    }

    & h4 {
      font-size: 1rem;
    }
  }
}
</style>
