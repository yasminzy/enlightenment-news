<template>
  <ul class="rounded-lg list border-2 border-stone-500 shadow">
    <li
      v-for="(item, index) in posts"
      :key="index"
      data-aos="fade-left"
      class="rounded-lg w-full grid p-6 gap-2"
      sm="gap-8 items-center grid-cols-[max-content_1fr_max-content]"
      last="border-none"
      odd="bg-stone-100">
      <NuxtLink :to="{ name: 'id', params: { id: item.id } }">
        <img
          v-lazy="item.img"
          class="rounded-lg mb-4 w-full"
          sm="w-16 h-16 rounded-full mb-0"
          :alt="item.title" />
      </NuxtLink>

      <div>
        <NuxtLink
          :to="{ name: 'id', params: { id: item.id } }"
          class="font-medium">
          {{ item.title }}
        </NuxtLink>

        <p v-interpolation class="mb-0" v-html="item.description" />
      </div>

      <p class="mt-0 date" sm="text-right">
        {{ item.date }}
      </p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  posts: { type: Array, required: true }
})
</script>
