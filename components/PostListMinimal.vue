<template>
  <ul class="rounded-lg list border-2 border-stone-500 shadow">
    <li
      v-for="(item, index) in posts"
      :key="index"
      data-aos="fade-down"
      class="border-b p-4"
      md="flex items-start"
      odd="bg-stone-100"
      first="rounded-tr-lg rounded-tl-lg"
      last="border-none">
      <NuxtLink
        :to="{
          name: 'section',
          params: { section: item.sectionId }
        }"
        class="pill"
        md="ml-auto order-last">
        {{ item.sectionName }}
      </NuxtLink>

      <div md="mr-8">
        <NuxtLink
          :to="{ name: 'id', params: { id: item.id } }"
          class="mb-4 block">
          {{ item.title }}
        </NuxtLink>

        <p class="my-0 date">
          {{ item.date }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  posts: { type: Array, required: true }
})
</script>
