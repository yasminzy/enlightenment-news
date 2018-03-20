<template>
<div class="container">
  <app-nav/>
  <nuxt/>
  <app-footer/>
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
</style>
