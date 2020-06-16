<template>
  <article v-if="data.response.content" class="article wrapper">
    <header>
      <small>{{
        data.response.content.blocks.body[0].publishedDate | moment("calendar")
      }}</small>

      <h1>{{ data.response.content.webTitle }}</h1>

      <hr class="hr" />
    </header>

    <div class="div" v-html="data.response.content.blocks.body[0].bodyHtml" />

    <footer>
      <hr class="hr" />

      <p>Related tags:</p>

      <ul class="content-tags">
        <li v-for="subitem in data.response.content.tags" :key="subitem.id">
          <nuxt-link :to="{ name: 'tag', params: { tag: subitem.id } }">
            <small>#{{ subitem.webTitle }}</small>
          </nuxt-link>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    // Get the article content based on the url
    const { data } = await axios.get(
      `https://content.guardianapis.com/${params.id}?show-blocks=body&show-tags=all&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`
    );
    return { data };
  },
  created() {
    if (!this.data.response.content) {
      const route = this.$store.state.route.path.replace("/", "");

      this.$router.push({
        name: "section",
        params: { section: route }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.article {
  padding: calc(var(--space) * 2) var(--space);
}

.hr,
figcaption,
.div {
  margin-bottom: var(--space);
}

.content-tags {
  column-gap: calc(var(--space) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  padding-left: 0;

  @media (--md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
