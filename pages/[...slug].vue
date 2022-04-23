<template>
  <div></div>
</template>

<script setup>
const route = useRoute()
const path = route.path.replace("/", "").replaceAll("%2F", "/")

await navigateTo({
  name: "id",
  params: { id: path }
})
</script>
