<template>
  <ul class="flex flex-wrap pt-4 pb-2 pl-0 list-none">
    <li v-for="(item, index) in tags" :key="index">
      <NuxtLink
        :to="{ name: 'tag', params: { tag: item.id } }"
        class="inline-block px-3 py-1 mb-2 mr-2 text-sm rounded-full bg-stone-200 text-stone-700">
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
