<template>
  <ul class="flex flex-wrap list-none pt-4 pb-2 pl-0">
    <li v-for="(item, index) in tags" :key="index">
      <NuxtLink
        :to="{ name: 'tag', params: { tag: item.id } }"
        class="rounded-full bg-stone-200 mr-2 text-sm mb-2 py-1 px-3 text-stone-700 inline-block">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { useChangeCase } from "@vueuse/integrations/useChangeCase"

const props = defineProps({
  data: { type: Array, required: true }
})

const tags = computed(() =>
  props.data?.map((item) => ({
    id: item.id,
    title: `#${useChangeCase(item.webTitle, "pascalCase").value}`
  }))
)
</script>
