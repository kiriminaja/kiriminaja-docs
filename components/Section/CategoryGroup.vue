<template>
  <div class="flex py-2 border-b border-dashed mb-0.5 border-outlineVariant">
    <span class="text-primary grow text-xs" v-text="item.title"></span>
  </div>
  <nav class="grid">
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
