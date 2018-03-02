<template>
<footer>
  <div class="wrapper">
    <div class="social" data-aos="fade-down-right">
      Follow Enlightenment:

      <ul>
        <li v-for="(item, index) in social" v-bind:key="index">
          <a v-bind:href="item.link">
            <i v-bind:class="'fa fa-' + item.icon"></i>
          </a>
        </li>
      </ul>
    </div>

    <p class="about" data-aos="fade-down-left">Enlightenment, the news and media division of Sahab Enlightenment, is the world’s largest international multimedia news provider reaching more than one billion people every day. Enlightenment provides trusted business, financial, national, and international news to professionals via Sahab Enlightenment desktops, the world's media organizations, and directly to consumers at Enlightenment.com and via Enlightenment TV.</p>

    <ul class="links">
      <li>&copy; 2018 Enlightenment</li>

      <li v-for="(item, index) in links" v-bind:key="index">
        <nuxt-link v-bind:to="'/' + item.link">
          <p v-html="item.text"></p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</footer>
</template>

<script>
import { urlize } from "~/assets/functions.js";

export default {
  data() {
    return {
      social: [
        {
          icon: "facebook",
          link: "hhttps://www.facebook.com"
        },
        {
          icon: "instagram",
          link: "https://www.instagram.com"
        },
        {
          icon: "twitter",
          link: "https://twitter.com"
        },
        {
          icon: "youtube",
          link: "https://www.youtube.com"
        }
      ],
      links: [
        { link: "corrections", text: "Corrections" },
        { link: "advertising-guidelines", text: "Advertising Guidelines" },
        { link: "careers", text: "Careers" },
        { link: "terms", text: "Terms of Use" },
        { link: "privacy", text: "Privacy Policy" }
      ]
    };
  },
  methods: {
    urlize
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/variables.css";

footer {
  color: var(--grey-700);
  background-color: var(--grey-100);
  margin-top: auto;
}

.wrapper {
  color: var(--grey-700);
  display: grid;
  font-size: 0.9em;
  grid-row-gap: calc(var(--space) / 2);
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
}

li a {
  color: var(--grey-700);
  display: block;
}

.social {
  display: flex;
  align-items: center;

  & li {
    & a {
      padding: 0.5rem 1rem;
    }
  }
}

.links {
  font-size: 0.9em;
  padding: 0.5rem 0;
  display: grid;
  grid-column-gap: var(--space);
  grid-row-gap: calc(var(--space) / 3);
  grid-template-columns: minmax(max-content, 1fr) 1fr;

  & li {
    @media (--sm) {
      margin-right: 1rem;
    }
  }

  @media (--md) {
    display: flex;
  }
}
</style>
