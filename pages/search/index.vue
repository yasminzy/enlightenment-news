<template>
  <article class="max-w-[80ch]">
    <SearchBox />
  </article>
</template>

<script setup>
import NProgress from "nprogress"

onMounted(() => {
  NProgress.done()
  window.scrollTo(0, 0)
})
</script>
