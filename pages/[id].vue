<template>
  <div
    v-if="data"
    class="grid gap-12"
    lg="grid-cols-[2fr_1fr]"
    xl="grid-cols-[3fr_1fr]">
    <article data-aos="slide-up" class="max-w-[80ch] card">
      <h1 class="font-medium mt-0">{{ title }}</h1>

      <small>{{ date }}</small>

      <div v-interpolation class="mb-0" v-html="body" />
    </article>

    <div data-aos="slide-right" data-aos-delay="50" lg="ml-auto">
      <PostTags :data="tags" />
    </div>
  </div>
</template>

<script setup>
import { useDateFormat } from "@vueuse/core"
import NProgress from "nprogress"

const route = useRoute()
const path = route.path.replace("/", "").replaceAll("%2F", "/")

const id = ref("")
id.value = route.params.id ? route.params.id : path
const key = useRuntimeConfig().public.guardianApiKey

const { data, error, refresh } = await useFetch(
  `https://content.guardianapis.com/${id.value}?show-blocks=body&show-tags=all&api-key=${key}`
)

const title = computed(() => data.value?.response.content.webTitle)

const date = computed(
  () =>
    useDateFormat(data.value?.response.content.webPublicationDate, "DD/MM/YYYY")
      .value
)

const body = computed(() =>
  data.value?.response.content.blocks.body[0].bodyHtml.replaceAll(
    "https://www.theguardian.com",
    ""
  )
)

const tags = computed(() => data.value?.response.content.tags)

onBeforeMount(async () => {
  checkIfNeedRedirect()
  checkIfRefreshingPage()
})

function checkIfNeedRedirect() {
  const needRedirect = data.value === undefined || error.value

  if (needRedirect) {
    const normalizedPath = path.replaceAll("%2F", "/")

    window.location.href = `https://www.theguardian.com/${normalizedPath}`
  }
}

function checkIfRefreshingPage() {
  const isArticlePage = (path.match(/\//g) || []).length === 4

  if (data.value === null) {
    isArticlePage ? refresh() : navigate()
  }
}

async function navigate() {
  const isSectionPage = (path.match(/\//g) || []).length === 0

  isSectionPage
    ? await navigateTo({ name: "section", params: { section: path } })
    : await navigateTo({ name: "tag", params: { tag: path } })
}

if (data.value) {
  NProgress.done()
  window.scrollTo(0, 0)
}
</script>
