<template>
  <div class="sticky top-16 md:top-20 z-50 bg-background py-3">
    <ul class="flex gap-3 overflow-x-auto">
      <li v-for="(item, i) in categories.items" :class="[
          'relative px-4 py-2.5 text-sm font-medium rounded-full shrink-0',
          (route.fullPath.includes(`/category/${item.fields.slug}`) ? 'bg-secondaryContainer text-onSecondaryContainer' : 'bg-surfaceContainer text-secondary')
      ]"
      >
        <span v-text="item.fields.title"></span>
        <NuxtLink :to="`/category/${item.fields.slug}`" class="absolute inset-0"/>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const {data: categories} = await useAsyncData('categories', () => $fetch('/api/help/categories'))

</script>
