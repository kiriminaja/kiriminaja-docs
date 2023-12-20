<template>
  <div class="mb-4 md:mb-14 mt-12 col-span-3 rounded-3xl">
    <div class="grid grid-cols-6">
      <div class="col-span-4">
        <div class="md:w-3/4">
          <h1 class="text-xl md:text-5xl mb-4 md:leading-tight font-semibold" v-text="title"></h1>
          <p class="text-lg slider-description text-onSurfaceVariant xl:w-9/12" v-text="description"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()
</script>
