<template>
  <div>
    <client-only>
      <HomeTopRated />
      <HomeFeaturedSimple />
      <HomeFeatured />
      <SearchBox class="wrapper" />
    </client-only>
  </div>
</template>

<script>
import HomeFeatured from "~/components/HomeFeatured";
import HomeFeaturedSimple from "~/components/HomeFeaturedSimple";
import HomeTopRated from "~/components/HomeTopRated";
import SearchBox from "~/components/SearchBox";

export default {
  components: {
    HomeFeatured,
    HomeFeaturedSimple,
    HomeTopRated,
    SearchBox
  }
};
</script>
