<template>
  <div class="container">
    <AppNav />
    <nuxt class="mh-100" />
    <AppFooter />
  </div>
</template>

<script>
import AppNav from "~/components/AppNav";
import AppFooter from "~/components/AppFooter";

export default {
  components: {
    AppNav,
    AppFooter
  }
};
</script>
