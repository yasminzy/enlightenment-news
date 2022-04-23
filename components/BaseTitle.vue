<template>
  <div md="flex items-center justify-between">
    <SearchBox v-if="search" md="order-last" />

    <h1 class="font-medium">{{ getTitle(props.title) }}</h1>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

const props = defineProps({
  title: { type: String, required: true },
  search: { type: Boolean, default: true }
})

function getTitle(string) {
  return betweenMdAndLg.value ? useTruncate(string, 15) : string
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const betweenMdAndLg = breakpoints.between("md", "lg")
</script>
