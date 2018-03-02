<template>
<section>
  <div class="container wrapper">
    <div class="wrapper" v-for="(item, index) in sections" v-bind:key="index">
      <header>
        <nuxt-link v-bind:to="'/' + item">
          <h2 data-aos="fade">{{ item.toUpperCase() }}</h2>
        </nuxt-link>
      </header>

      <div v-for="subitem in home[item]" v-bind:key="subitem.id" data-aos="fade-up-right">
        <nuxt-link v-bind:to="{ name: 'id-id', params: { id: subitem.id } }">
          <div v-bind:class="['bg', subitem.fields.thumbnail ? '' : 'dark']" v-bind:style="{ backgroundImage: 'url(' + subitem.fields.thumbnail + ')'}">
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
    for (let i = 0, j = this.sections.length; i < j; i++) {
      let data = {
        section: this.sections[i]
      };
      data.size = 1;
      this.$store.dispatch("getHomeContent", data);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/variables.css";

section {
  background-color: var(--grey-100);
  color: var(--white);
}

.container {
  display: grid;
  grid-gap: var(--space);
  min-height: 100vh;

  @media (--sm) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(auto, max-content);
  }

  @media (--xl) {
    grid-gap: calc(var(--space) * 2);
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
