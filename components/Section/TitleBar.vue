<template>
  <h1 class="not-prose mb-3 text-3xl md:text-5xl font-semibold" v-text="title"></h1>
</template>
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
