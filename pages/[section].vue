<template>
  <div>
    <BaseTitle :title="title" />
    <PostList :data="posts" :style="'stacked'" />
  </div>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase"
import NProgress from "nprogress"

const route = useRoute()
const path = route.path.replace("/", "").replaceAll("%2F", "/")

const section = route.params.section ? route.params.section : path
const key = useRuntimeConfig().public.guardianApiKey

const { data } = await useFetch(
  `https://content.guardianapis.com/search?section=${section}&total=18&page-size=18&show-fields=trailText,body,thumbnail&show-tags=keyword&api-key=${key}`
)

const title = computed(() => useChangeCase(section, "capitalCase").value)

const posts = computed(() => data.value?.response.results)

if (data.value) {
  NProgress.done()
  window.scrollTo(0, 0)
}
</script>
