<template>
  <div>
    <div class="sticky top-24 shrink w-[15rem]">
      <ul>
        <li v-for="(item, i) in categories.items" :class="[
          'relative px-4 py-2.5 rounded-full',
          (route.fullPath.includes(`/category/${item.fields.slug}`) ? 'bg-secondaryContainer' : 'hover:bg-surfaceContainer text-secondary')
      ]"
        >
          <span v-text="item.fields.title"></span>
          <NuxtLink :to="`/category/${item.fields.slug}`" class="absolute inset-0"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const {data: categories} = await useAsyncData('categories', () => $fetch('/api/help/categories'))

</script>
