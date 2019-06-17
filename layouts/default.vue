<template>
  <div class="container mh-100">
    <AppNav />
    <nuxt class="wrapper" />
    <AppFooter />
  </div>
</template>

<script>
import AppNav from "~/components/app-nav.vue";
import AppFooter from "~/components/app-footer.vue";

export default {
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style scoped>
.mh-100 {
  min-height: 100vh;
}
</style>
