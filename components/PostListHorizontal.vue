<template>
  <ul class="list grid gap-8" xl="grid-cols-2">
    <li v-for="(item, index) in posts" :key="index" class="card">
      <div
        data-aos="fade-up"
        class="h-full grid gap-8"
        sm="grid-cols-2"
        md="grid-cols-[2fr_1fr]"
        xl="grid-cols-2">
        <NuxtLink
          :to="{ name: 'id', params: { id: item.id } }"
          class="self-center">
          <img
            v-lazy="item.img"
            :alt="item.title"
            class="rounded-lg mb-0 w-full" />
        </NuxtLink>

        <div class="flex flex-col" sm="order-first">
          <NuxtLink
            :to="{ name: 'section', params: { section: item.sectionId } }"
            class="pill">
            {{ item.sectionName }}
          </NuxtLink>

          <NuxtLink
            :to="{ name: 'id', params: { id: item.id } }"
            class="font-medium mb-4 block">
            {{ item.title }}
          </NuxtLink>

          <p class="mt-auto date">
            {{ item.date }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  posts: { type: Array, required: true }
})
</script>
