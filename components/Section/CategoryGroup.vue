<template>
  <div class="relative md:bg-surfaceContainer rounded-2xl">
    <div
        class="hidden md:flex px-4 py-2.5 rounded-full text-center md:text-left md:py-2 bg-surfaceContainer"
    >
      <span class="font-medium grow" v-text="item.title"></span>
    </div>
    <nav class="z-999 top-full md:static md:p-4 md:pt-0 flex gap-3 md:gap-0 md:grid">
      <NuxtLink :class="[
        route.fullPath.endsWith(child._path) ? 'border-primary bg-secondaryContainer text-primary' : 'bg-surfaceContainer border-outlineVariant border-dashed text-onSurfaceVariant',
        'block rounded-full relative font-medium md:bg-transparent',
        'shrink-0 px-4 md:px-0 py-2.5 md:py-0.5'
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
