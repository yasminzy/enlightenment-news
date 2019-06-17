<template>
  <div class="container">
    <article class="wrapper">
      <ul class="content">
        <li v-for="item in content" :key="item.id" data-aos="flip-up">
          <small>{{ item.webPublicationDate | moment("calendar") }}</small>

          <h3>
            <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">{{
              item.webTitle
            }}</nuxt-link>
          </h3>

          <div class="img-wrapper">
            <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">
              <img
                v-lazy="item.fields.thumbnail"
                :alt="item.webTitle"
                class="hvr hvr-grow"
              />
            </nuxt-link>
          </div>

          <p v-html="item.fields.trailText"></p>

          <details>
            <summary>Tags</summary>

            <ul class="content-tags">
              <li v-for="subitem in item.tags" :key="subitem.id">
                <nuxt-link
                  :to="{ name: 'tag-tag', params: { id: subitem.id } }"
                >
                  <small>#{{ subitem.webTitle }}</small>
                </nuxt-link>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <search-box />
    </article>

    <aside>
      <ul class="tags wrapper">
        <li v-for="item in tags" :key="item.id" data-aos="flip-down">
          <nuxt-link :to="{ name: 'tag-tag', params: { id: item.id } }">
            <small>#{{ item.webTitle }}</small>
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import SearchBox from "~/components/search-box";

export default {
  components: {
    SearchBox
  },
  computed: {
    content() {
      return this.$store.getters.content;
    },
    tags() {
      return this.$store.getters.tags;
    }
  },
  async created() {
    // Get articles related to the selected section
    const route = this.$store.state.route.path.replace("/", "");
    await this.$store.dispatch("getSectionContent", route);
  }
};
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--space);

  @media (--md) {
    grid-template-columns: 2fr 1fr;
  }

  @media (--xl) {
    column-gap: calc(var(--space) * 2);
  }
}

.content,
.content-tags,
.tags {
  list-style-type: none;
  padding-left: 0;
}

.content {
  display: grid;
  row-gap: var(--space);
  min-height: 100vh;

  @media (--sm) {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space);
  }

  @media (--md) {
    grid-template-columns: 1fr;
  }

  & > li {
    box-shadow: var(--shadow);
    width: 100%;
    padding: var(--space);

    & a {
      color: var(--black);
      display: block;
    }
  }

  @media (--sm) {
    row-gap: calc(var(--space) * 2);
  }
}

h3 {
  margin-top: 0;
}

img {
  margin: calc(var(--space) / 2) auto;
}

.content-tags {
  display: grid;
  column-gap: calc(var(--space) / 3);
  grid-template-columns: repeat(3, 1fr);
}

summary {
  cursor: pointer;
  outline: none;
}

.tags {
  text-align: center;

  & li:not(:last-child) {
    margin-bottom: var(--space);
  }

  & a {
    color: var(--black);
    display: block;
  }

  @media (--sm) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (--md) {
    grid-template-columns: 1fr;
    position: fixed;
    text-align: left;
  }
}
</style>
