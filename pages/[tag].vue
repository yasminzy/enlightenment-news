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

const tag = route.params.tag ? route.params.tag : path
const key = useRuntimeConfig().public.guardianApiKey

const { data } = await useFetch(
  `https://content.guardianapis.com/search?tag=${tag}&page-size=18&show-fields=trailText,body,thumbnail&show-tags=keyword&api-key=${key}`
)

const title = computed(
  () => `#${useChangeCase(getTitle(tag), "pascalCase").value}`
)

function getTitle(string) {
  const parts = string.split("/")
  return parts.pop()
}

const posts = computed(() => data.value?.response.results)

if (data.value) {
  NProgress.done()
  window.scrollTo(0, 0)
}
</script>
