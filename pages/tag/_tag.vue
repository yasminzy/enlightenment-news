<template>
  <div class="container">
    <aside class="wrapper" data-aos="fade">
      <div>
        <p>
          Result articles related to
          <span>#{{ data.response.tag.webTitle.replace(/\s/g, "") }}</span>
        </p>
      </div>
    </aside>

    <article class="wrapper">
      <ul class="content">
        <li
          v-for="item in data.response.results"
          :key="item.id"
          data-aos="fade-down-right"
        >
          <small>{{ item.webPublicationDate | moment("calendar") }}</small>

          <h3>
            <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">
              {{ item.webTitle }}
            </nuxt-link>
          </h3>

          <div class="img-wrapper">
            <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">
              <img
                class="hvr hvr-grow"
                :src="item.fields.thumbnail"
                :alt="item.webTitle"
              />
            </nuxt-link>
          </div>

          <p v-html="item.fields.trailText" />
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    // Get articles related to the selected tag
    const { data } = await axios.get(
      `https://content.guardianapis.com/${params.id}?page-size=25&show-fields=trailText,thumbnail&api-key=${process.env.VUE_APP_GUARDIAN_API_KEY}`
    );
    return { data };
  }
};
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--space);

  @media (--md) {
    grid-template-columns: 2fr 1fr;

    & aside {
      order: 1;
    }
  }

  @media (--xl) {
    column-gap: calc(var(--space) * 2);
  }
}

.content {
  display: grid;
  row-gap: var(--space);
  list-style-type: none;
  padding-left: 0;

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

aside {
  width: 100%;
}

span {
  font-weight: bold;
}

h3 {
  margin-top: 0;
}

img {
  margin: calc(var(--space) / 2) auto;
}
</style>
