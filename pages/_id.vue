<template>
  <article
    v-if="typeof data !== 'undefined' && data.response.content"
    class="article wrapper"
  >
    <header>
      <small>{{
        data.response.content.blocks.body[0].publishedDate | moment("calendar")
      }}</small>

      <h1>{{ data.response.content.webTitle }}</h1>

      <hr class="hr" />
    </header>

    <!-- Use <nuxt-link> instead of <a> for relative link. Turn link that starts with "https://www.theguardian.com" to a relative link  -->
    <div
      v-interpolation
      class="div"
      v-html="
        data.response.content.blocks.body[0].bodyHtml.replace(
          /https:\/\/www.theguardian.com/g,
          ''
        )
      "
    />

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

  <article v-else class="mh-100 wrapper">
    <p>Redirecting...</p>
  </article>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://content.guardianapis.com/${params.id}?show-blocks=body&show-tags=all&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`
      );

      return { data };
    } catch (error) {
      if (error.response) {
        console.log(error.response); // eslint-disable-line no-console
      }
    }
  },
  created() {
    let route = this.$store.state.route.path.replace("/", "");

    // If the data is not undefined,
    if (typeof this.data !== "undefined") {
      // but we do not have the article content,
      if (!this.data.response.content) {
        // go to the _section page
        this.$router.push({
          name: "section",
          params: { section: route }
        });
      }
    }
    // If the data is undefined because the content is commercial,
    else if (process.client) {
      // fix the route
      route = route.replace(/%2F/g, "/");

      // then go to the real page
      /* eslint-disable nuxt/no-globals-in-created */
      window.location.href = `https://www.theguardian.com/${route}`;
      /* eslint-enable nuxt/no-globals-in-created */
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
