<template>
<div>
  <home-top-rated/>
  <home-featured-simple/>
  <home-more/>
  <home-featured/>
  <search-box class="wrapper"/>
</div>
</template>

<script>
import HomeTopRated from "~/components/home-top-rated";
import HomeFeaturedSimple from "~/components/home-featured-simple";
import HomeMore from "~/components/home-more";
import HomeFeatured from "~/components/home-featured";
import SearchBox from "~/components/search-box";

export default {
  components: {
    HomeFeatured,
    HomeFeaturedSimple,
    HomeTopRated,
    HomeMore,
    SearchBox
  },
  layout: "home"
};
</script>

<style lang="postcss">
@import "../assets/variables.css";
</style>
