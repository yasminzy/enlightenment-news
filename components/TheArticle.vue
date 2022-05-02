<template>
  <article class="mx-auto max-w-[80ch]" xl="card ml-0">
    <h1
      class="text-3xl font-medium leading-relaxed"
      xl="mt-0 leading-relaxed text-4xl">
      {{ title }}
    </h1>

    <small>{{ date }}</small>

    <div v-interpolation class="mb-0" v-html="body" />
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  body: { type: String, required: true }
})
</script>
