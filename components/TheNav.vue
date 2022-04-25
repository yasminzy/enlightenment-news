<template>
  <header id="top" class="h-max bg-stone-700 shadow-lg py-4" xl="py-0">
    <nav class="flex flex-col mx-auto max-w-7xl w-10/12" xl="flex-row">
      <NuxtLink
        to="/"
        class="rounded-lg border-2 border-stone-50 text-center p-2 text-2xl text-stone-50 inline-block self-center uppercase">
        Enlightenment News
      </NuxtLink>

      <ul
        class="flex flex-wrap list-none pl-0 justify-center"
        lg="justify-around"
        xl="ml-auto">
        <li v-for="(item, index) in nav" :key="index">
          <NuxtLink
            :to="{
              name: 'section',
              params: { section: item.sectionId }
            }"
            class="flex flex-col mx-2 p-2 text-stone-50 items-center"
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
