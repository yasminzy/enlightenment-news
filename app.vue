<template>
  <div
    data-aos="fade"
    class="flex flex-col font-sans min-h-screen bg-stone-50 text-lg leading-loose w-full text-stone-700 overflow-hidden">
    <TheNav />

    <main class="mx-auto mb-8 max-w-7xl py-8 w-10/12 prose-stone">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import NProgress from "nprogress"

const router = useRouter()

router.beforeEach((from, to) => {
  if (from.path !== to.path) {
    NProgress.start()
  }
})
</script>
