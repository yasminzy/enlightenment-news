<template>
  <section class="container wrapper">
    <div
      v-for="(item, index) in sections"
      v-show="home[sections[0]]"
      :key="index"
      class="wrapper"
      data-aos="fade-right"
    >
      <header>
        <nuxt-link
          :to="{ name: 'section', params: { section: item } }"
          class="a header-a"
        >
          <h3>{{ item.toUpperCase() }}</h3>

          <ChevronRightIcon />
        </nuxt-link>
      </header>

      <hr class="hr" />

      <ul class="ul">
        <li v-for="subitem in home[item]" :key="subitem.id" class="li">
          <nuxt-link :to="{ name: 'id', params: { id: subitem.id } }" class="a">
            <div class="img-wrapper">
              <img
                v-lazy="subitem.fields.thumbnail"
                :alt="subitem.webTitle"
                class="hvr hvr-grow img"
              />
            </div>

            <h4 class="h4">{{ subitem.webTitle }}</h4>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";

export default {
  components: {
    ChevronRightIcon
  },
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

<style lang="postcss" scoped>
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

.a {
  color: var(--dark);
}

.header-a {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.hr {
  border-color: var(--accent);
}

.ul {
  list-style-type: none;
  padding-left: 0;
}

.li {
  & .a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(var(--space) / 2) var(--space);
  }

  & .img {
    margin-bottom: calc(var(--space) / 2);
  }

  & .h4 {
    font-size: 1.25rem;
    margin: 0;
  }

  &:not(:first-child) {
    border-top: 1px solid var(--grey);

    & .img {
      display: none;
    }

    & .h4 {
      font-size: 1rem;
    }
  }
}
</style>
