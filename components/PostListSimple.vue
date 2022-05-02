<template>
  <ul class="border-2 rounded-lg shadow list border-stone-500">
    <li
      v-for="(item, index) in posts"
      :key="index"
      data-aos="fade-left"
      class="grid w-full gap-2 p-6 rounded-lg"
      sm="gap-8 items-center grid-cols-[max-content_1fr_max-content]"
      last="border-none"
      odd="bg-stone-100">
      <NuxtLink :to="{ name: 'id', params: { id: item.id } }">
        <img
          v-lazy="item.img"
          class="w-full mb-4 rounded-lg"
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
