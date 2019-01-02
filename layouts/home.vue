<template>
  <div class="container">
    <AppNav />
    <nuxt />
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
