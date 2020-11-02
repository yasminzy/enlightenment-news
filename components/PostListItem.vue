<template>
  <li
    v-show="date && identifier && img && tags && title && trailText"
    class="li"
    data-aos="fade"
  >
    <small>{{ date | moment("calendar") }}</small>

    <h3 class="h3">
      <nuxt-link :to="{ name: 'id', params: { id: identifier } }" class="a">
        {{ title }}
      </nuxt-link>
    </h3>

    <div v-if="img" class="img-wrapper">
      <nuxt-link :to="{ name: 'id', params: { id: identifier } }" class="a">
        <img :src="img" :alt="title" class="hvr hvr-grow img" />
      </nuxt-link>
    </div>

    <p v-interpolation v-html="trailText" />

    <details>
      <summary class="summary">Tags</summary>

      <ul class="content-tags">
        <li v-for="item in tags" :key="item.id" class="li-2">
          <nuxt-link :to="{ name: 'tag', params: { tag: item.id } }" class="a">
            <small>#{{ item.webTitle }}</small>
          </nuxt-link>
        </li>
      </ul>
    </details>
  </li>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    trailText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.content-tags {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
}

.h3 {
  margin-top: 0;
}

.img {
  margin: calc(var(--space) / 2) auto;
}

.summary {
  cursor: pointer;
  margin-bottom: calc(var(--space) / 4);
  outline: none;
}

.li {
  box-shadow: var(--shadow);
  padding: var(--space);
  width: 100%;
}

.a {
  color: var(--dark);
  display: block;
}

.li-2 {
  margin-bottom: calc(var(--space) / 4);
  margin-right: calc(var(--space) / 2);
}
</style>
