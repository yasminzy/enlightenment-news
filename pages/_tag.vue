<template>
  <div class="posts-container wrapper">
    <aside class="aside wrapper" data-aos="fade">
      <div>
        <p>
          Result articles related to
          <span class="span">#{{ data.response.tag.webTitle }}</span>
        </p>
      </div>
    </aside>

    <article class="wrapper">
      <ul class="content">
        <PostListItem
          v-for="item in data.response.results"
          :key="item.id"
          :date="item.webPublicationDate"
          :identifier="item.id"
          :img="item.fields.thumbnail"
          :tags="item.tags"
          :title="item.webTitle"
          :trail-text="item.fields.trailText"
        />
      </ul>

      <SearchBox />
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    // Get articles related to the selected tag
    const { data } = await axios.get(
      `https://content.guardianapis.com/${params.tag}?page-size=25&show-fields=trailText,thumbnail&show-tags=keyword&api-key=${process.env.NUXT_ENV_GUARDIAN_API_KEY}`
    );
    return { data };
  }
};
</script>

<style lang="postcss" scoped>
.aside {
  width: 100%;

  @media (--md) {
    order: 1;
  }
}

.span {
  font-weight: 600;
}
</style>
