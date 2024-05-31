<template>
  <div class="relative rounded-2xl md:mb-5">
    <div
        class="hidden md:flex rounded-full text-center md:text-left mb-2 text-onSurfaceVariant opacity-70"
    >
      <span class="text-xs uppercase font-semibold grow" v-text="item.title"></span>
    </div>
    <nav class="z-999 top-full md:static flex flex-wrap gap-2 md:grid">
      <NuxtLink :class="[
        route.fullPath.endsWith(child._path) ? 'text-primary outline-primary outline-2 bg-primaryContainer' : 'text-onSurface outline-outlineVariant outline-1',
        'block relative font-medium',
        'shrink-0',
        'px-2 py-1 outline rounded-lg'
    ]" :to="child._path"
                v-for="(child, kez) in item.children" :key="`d-${kez}`"
      >
        <span v-text="child.title"></span>
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
