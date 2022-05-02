<template>
  <div>
    <Head>
      <Title>Enlightenment News</Title>
      <Meta name="description" content="Homepage of Enlightenment News." />
    </Head>

    <HomeFeatured class="mb-16" />
    <HomeTopRated />
  </div>
</template>

<script setup>
import { useStore } from "@/stores/home"
import NProgress from "nprogress"

onBeforeMount(() => {
  NProgress.start()
})

const store = useStore()
const finished = computed(() => {
  store.featured.length && store.topRated.length
})

onMounted(() => {
  if (finished) {
    NProgress.done()
    window.scrollTo(0, 0)
  }
})
</script>
