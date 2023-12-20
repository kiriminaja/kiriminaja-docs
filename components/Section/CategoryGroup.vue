<template>
  <div class="relative rounded-2xl">
    <div
        class="hidden md:flex rounded-full text-center md:text-left px-3.5 mb-2 text-onSurfaceVariant"
    >
      <span class="text-xs uppercase font-semibold grow" v-text="item.title"></span>
    </div>
    <nav class="z-999 top-full md:static flex gap-2 md:grid">
      <NuxtLink :class="[
        route.fullPath.endsWith(child._path) ? 'border-primary bg-primary text-onPrimary' : 'bg-surfaceContainerLow border-outlineVariant border-dashed text-onSurfaceVariant',
        'block rounded-full relative font-medium',
        'shrink-0 px-3.5 py-2.5 md:py-2'
    ]" :to="child._path"
                v-for="(child, kez) in item.children" :key="`d-${kez}`"
      >
        <span class="text-sm" v-text="child.title"></span>
      </NuxtLink>
    </nav>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
defineProps<{
  item: object
}>()
</script>
