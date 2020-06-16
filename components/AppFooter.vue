<template>
  <footer class="footer">
    <div class="wrapper" data-aos="fade">
      <div class="social">
        Follow Enlightenment:
        <ul class="ul">
          <li v-for="(item, index) in social" :key="index">
            <a :href="item.link" class="a">
              <component :is="item.icon" />
            </a>
          </li>
        </ul>
      </div>

      <p class="about">
        Enlightenment, the news and media division of Sahab Enlightenment, is
        the world’s largest international multimedia news provider reaching more
        than one billion people every day. Enlightenment provides trusted
        business, financial, national, and international news to professionals
        via Sahab Enlightenment desktops, the world's media organizations, and
        directly to consumers at Enlightenment.com and via Enlightenment TV.
      </p>

      <ul class="links ul">
        <li class="li">&copy; 2018-2020 Enlightenment</li>

        <li v-for="(item, index) in links" :key="index">
          <nuxt-link :to="`/${item.link}`" class="a">
            <p v-html="item.text"></p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon
} from "vue-feather-icons";
import { toKebabCase } from "~/assets/js/functions";

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
  },
  data() {
    return {
      social: [
        {
          icon: "FacebookIcon",
          link: "hhttps://www.facebook.com"
        },
        {
          icon: "InstagramIcon",
          link: "https://www.instagram.com"
        },
        {
          icon: "TwitterIcon",
          link: "https://twitter.com"
        },
        {
          icon: "YoutubeIcon",
          link: "https://www.youtube.com"
        }
      ],
      links: [
        { link: "corrections", text: "Corrections" },
        { link: "guidelines", text: "Advertising Guidelines" },
        { link: "careers", text: "Careers" },
        { link: "terms", text: "Terms of Use" },
        { link: "privacy", text: "Privacy Policy" }
      ]
    };
  },
  methods: {
    toKebabCase
  }
};
</script>

<style lang="postcss" scoped>
.footer {
  background-color: var(--dark);
  color: var(--light);
  margin-top: auto;
}

.wrapper {
  display: grid;
  font-size: 1rem;
  row-gap: calc(var(--space) / 2);
}

.social {
  align-items: center;
  display: flex;

  & .a {
    padding: 0 0.5rem;
  }
}

.ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
}

.a {
  display: block;
  color: var(--accent);
}

.links {
  column-gap: var(--space);
  display: grid;
  font-size: 0.9em;
  grid-template-columns: minmax(max-content, 1fr) 1fr;
  padding: 0.5rem 0;
  row-gap: calc(var(--space) / 3);

  @media (--md) {
    display: flex;
  }

  & .li {
    @media (--sm) {
      margin-right: 1rem;
    }
  }
}
</style>
