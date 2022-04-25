<template>
  <article class="max-w-[80ch]">
    <SearchBox class="mb-8" />

    <div v-if="store.results.length">
      <PostList :data="store.results" :style="'simple'" />
    </div>
  </article>
</template>

<script setup>
import { useStore } from "@/stores/search"
import NProgress from "nprogress"

const store = useStore()
const finished = computed(() => {
  store.results.length
})

onMounted(() => {
  if (finished) {
    NProgress.done()
    window.scrollTo(0, 0)
  }
})
</script>
