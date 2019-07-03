<template>
  <div>
    <HomeTopRated />
    <HomeFeaturedSimple />
    <HomeFeatured />
    <SearchBox class="wrapper" />
  </div>
</template>

<script>
import HomeTopRated from "@/components/home-top-rated";
import HomeFeaturedSimple from "@/components/home-featured-simple";
import HomeFeatured from "@/components/home-featured";
import SearchBox from "@/components/search-box";

export default {
  components: {
    HomeFeatured,
    HomeFeaturedSimple,
    HomeTopRated,
    SearchBox
  },
  layout: "home"
};
</script>
