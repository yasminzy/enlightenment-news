<template>
  <form class="flex max-h-max">
    <input
      v-model="store.query"
      class="w-full px-4 border-2 rounded-tl-lg rounded-bl-lg max-h-max border-stone-500"
      placeholder="Looking for something?"
      required
      type="text"
      @keyup.enter="handleInput" />

    <button
      class="flex items-center px-4 py-2 border-none rounded-tr-lg rounded-br-lg cursor-pointer max-w-fit bg-stone-500 text-stone-50"
      hover="opacity-75"
      @click.prevent="handleInput">
      <div class="i-fe-search" />
    </button>
  </form>
</template>

<script setup>
import { useStore } from "@/stores/search"
import { useChangeCase } from "@vueuse/integrations/useChangeCase"

const store = useStore()
const route = useRoute()

onBeforeMount(() => {
  checkIfRefreshingPage()
})

function checkIfRefreshingPage() {
  const isRefreshingPage = route.name === "search-query" && !store.query

  if (isRefreshingPage) {
    const queryFromUrl = route.path.replace("/search/", "")

    store.query = useChangeCase(queryFromUrl, "noCase").value
    handleInput()
  }
}

function handleInput() {
  getSearchResults()
  goToSearchPage()
}

async function getSearchResults() {
  const firstQuery = !store.prevQuery
  const sameQuery = store.query === store.prevQuery
  const key = useRuntimeConfig().public.guardianApiKey

  if (store.query && (firstQuery || !sameQuery)) {
    await store.getSearchResults(key)

    store.prevQuery = store.query
  }
}

async function goToSearchPage() {
  if (store.query) {
    await navigateTo({
      name: "search-query",
      params: { query: store.paramCaseQuery }
    })
  }
}
</script>
