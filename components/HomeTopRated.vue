<template>
  <section v-if="store.topRated.length">
    <BaseTitle title="Top Rated" :search="false" />

    <div>
      <PostList :data="store.topRated" :style="'minimal'" />
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/stores/home"

const store = useStore()

onBeforeMount(async () => {
  if (!store.topRated.length) {
    const key = useRuntimeConfig().public.guardianApiKey

    await store.getHomeTopRatedContent(key)
  }
})
</script>
