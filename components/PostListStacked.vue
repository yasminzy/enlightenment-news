<template>
  <ul class="list grid gap-8" md="grid-cols-2" xl="grid-cols-3">
    <li
      v-for="(item, index) in posts"
      :key="index"
      data-aos="fade-right"
      class="flex flex-col card">
      <NuxtLink :to="{ name: 'id', params: { id: item.id } }">
        <img
          v-lazy="item.img"
          :alt="item.title"
          class="rounded-lg my-0 w-full" />
      </NuxtLink>

      <div class="my-4">
        <p class="date">
          {{ item.date }}
        </p>

        <NuxtLink
          :to="{ name: 'id', params: { id: item.id } }"
          class="font-medium my-2 block">
          {{ item.title }}
        </NuxtLink>

        <p v-interpolation class="mb-0" v-html="item.description" />
      </div>

      <div class="mt-auto mb-4">
        <PostTags :data="item.tags" />
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  posts: { type: Array, required: true }
})
</script>
