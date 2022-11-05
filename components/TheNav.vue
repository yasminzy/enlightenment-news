<template>
  <header id="top" class="py-4 shadow-lg h-max bg-stone-700" xl="py-0">
    <nav class="flex flex-col w-10/12 mx-auto max-w-7xl" xl="flex-row">
      <NuxtLink
        to="/"
        class="self-center inline-block p-2 text-2xl text-center uppercase border-2 rounded-lg border-stone-50 text-stone-50">
        Enlightenment News
      </NuxtLink>

      <ul
        class="flex flex-wrap justify-center pl-0 list-none"
        lg="justify-around"
        xl="ml-auto">
        <li v-for="(item, index) in nav" :key="index">
          <NuxtLink
            :to="{
              name: 'section',
              params: { section: item.sectionId }
            }"
            class="flex flex-col items-center p-2 mx-2 text-stone-50"
            xl="mx-4">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase"

const sections = useFeaturedSections()

const nav = computed(() =>
  sections.value?.map((item) => {
    return {
      sectionId: item,
      name: useChangeCase(item, "capitalCase").value
    }
  })
)
</script>
