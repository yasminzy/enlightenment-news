<template>
<article>
  <header data-aos="flip-left">
    <small>{{ data.response.content.blocks.body[0].publishedDate | moment("calendar") }}</small>

    <h1>{{ data.response.content.webTitle }}</h1>

    <hr>
  </header>

  <div v-html="data.response.content.blocks.body[0].bodyHtml" data-aos="fade"></div>

  <footer>
    <hr>

    <p>Related tags:</p>

    <ul class="content-tags">
      <li v-for="subitem in data.response.content.tags" v-bind:key="subitem.id" data-aos="flip-right">
        <nuxt-link v-bind:to="{ name: 'tags-tags', params: { id: subitem.id } }">
          <small>#{{ subitem.webTitle }}</small>
        </nuxt-link>
      </li>
    </ul>
  </footer>
</article>
</template>

<script>
import { GUARDIAN_API_KEY } from "~/assets/keys";
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://content.guardianapis.com/${
        params.id
      }?show-blocks=body&show-tags=all&api-key=${GUARDIAN_API_KEY}`
    );
    return { data };
  }
};
</script>

<style lang="postcss" scoped>
@import "../../assets/variables.css";

article {
  padding: calc(var(--space) * 2) var(--space);
}

hr,
figcaption,
div {
  margin-bottom: var(--space);
}

.content-tags {
  display: grid;
  grid-column-gap: calc(var(--space) / 2);
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  padding-left: 0;

  @media (--md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
