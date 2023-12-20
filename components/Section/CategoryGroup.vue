<template>
  <div
      class="flex px-4 py-2.5 md:px-0 text-center md:text-left rounded-full md:rounded-none md:py-2 bg-secondaryContainer md:bg-transparent md:border-b md:border-dashed  md:mb-0.5 md:border-outlineVariant"
  >
    <span class="text-primary grow md:text-xs" v-text="item.title"></span>
  </div>
  <nav class="absolute md:static bg-surfaceContainer p-4 md:bg-transparent md:p-0 md:grid">
    <NuxtLink :class="[
        route.fullPath.endsWith(child._path) ? 'border-primary text-primary' : 'border-outlineVariant border-dashed text-onSurfaceVariant',
        'block py-0.5 rounded-full relative font-medium'
    ]" :to="child._path"
              v-for="(child, kez) in item.children" :key="`d-${kez}`"
    >
      <span class="text-sm" v-text="child.title"></span>
    </NuxtLink>
  </nav>
</template>
<script setup lang="ts">
const route = useRoute()
defineProps<{
  item: object
}>()
</script>
