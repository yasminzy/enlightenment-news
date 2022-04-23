<template>
  <section>
    <BaseTitle title="Featured" />

    <div v-if="store.featured.length">
      <PostList :data="store.featured" :style="'horizontal'" />
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/stores/home"

const store = useStore()
const sections = useFeaturedSections()

onBeforeMount(() => {
  const data = {
    section: "",
    size: 1,
    key: useRuntimeConfig().public.guardianApiKey
  }

  if (!store.featured.length) {
    sections.value.forEach(async (section) => {
      data.section = section

      await store.getHomeContent(data)
    })
  }
})
</script>
