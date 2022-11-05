<template>
  <PostListHorizontal v-if="horizontal" :posts="posts" />
  <PostListMinimal v-if="minimal" :posts="posts" />
  <PostListSimple v-if="simple" :posts="posts" />
  <PostListStacked v-if="stacked" :posts="posts" />
</template>

<script setup>
import { useDateFormat } from "@vueuse/core"
import { useChangeCase } from "@vueuse/integrations/useChangeCase"

const props = defineProps({
  data: { type: Array, required: true },
  style: {
    type: String,
    required: true,

    validator: (value) => {
      return ["horizontal", "minimal", "simple", "stacked"].includes(value)
    }
  }
})

const horizontal = computed(() => props.style === "horizontal")
const minimal = computed(() => props.style === "minimal")
const simple = computed(() => props.style === "simple")
const stacked = computed(() => props.style === "stacked")

const posts = computed(() =>
  props.data?.map((item) => ({
    date: useDateFormat(item.webPublicationDate, "DD/MM/YYYY").value,
    description: useTruncate(item.fields.trailText, 100),
    id: item.id,
    img: item.fields.thumbnail,
    sectionId: item.sectionId,
    sectionName: useChangeCase(item.sectionName, "capitalCase").value,
    tags: item.tags.slice(0, 3),
    title: item.webTitle
  }))
)
</script>
