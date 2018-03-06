<template>
<section class="container wrapper">
  <div class="wrapper" v-for="(item, index) in sections" v-bind:key="index">
    <header>
      <nuxt-link v-bind:to="'/' + item">
        <h3 data-aos="fade">{{ item.toUpperCase() }}</h3>
        <i class="icon ion-chevron-right"></i>
      </nuxt-link>
    </header>

    <hr>

    <ul>
      <li v-for="subitem in home[item]" v-bind:key="subitem.id" data-aos="fade-up-left">
        <nuxt-link v-bind:to="{ name: 'id-id', params: { id: subitem.id } }">
          <div class="img-wrapper">
            <img class="hvr hvr-grow" v-bind:src="subitem.fields.thumbnail" v-bind:alt="subitem.webTitle">
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
      sections: ["books", "music", "stage", "film", "games", "fashion"]
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
      let data = {
        section: this.sections[i]
      };
      data.size = 3;
      this.$store.dispatch("getHomeContent", data);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/variables.css";

.container {
  display: grid;
  grid-gap: var(--space);

  @media (--sm) {
    grid-template-columns: 1fr 1fr;
  }

  @media (--xl) {
    grid-gap: calc(var(--space) * 2);
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
