<template>
  <div
    data-aos="fade"
    class="flex flex-col w-full min-h-screen overflow-hidden font-sans text-lg leading-loose bg-stone-50 text-stone-700">
    <TheNav />

    <main class="w-10/12 py-8 mx-auto mb-8 max-w-7xl prose-stone">
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
