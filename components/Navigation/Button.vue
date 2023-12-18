<template>
  <div class="relative w-8/12 lg:w-full py-2 px-5 group">
    <div class="text-center relative py-1.5 mb-1 flex w-full justify-center">
      <span :class="[
          'absolute top-0 left-1/2 -translate-x-1/2 w-full transition-all rounded-full bottom-0',
          (isActive ? 'bg-secondaryContainer w-full' : 'w-0 group-hover:w-full group-hover:bg-surfaceVariant')
      ]"></span>
      <div :class="[
          'relative',
          (isActive ? 'text-onSecondaryContainer' : '')
      ]">
        <IconHandler :icon="icon" :is-active="isActive"></IconHandler>
      </div>
    </div>
    <span class="text-sm group-hover:font-medium text-center block" v-text="label"></span>
    <NuxtLink :to="to" class="absolute inset-0"/>
  </div>
</template>
<script lang="ts" setup>
const prop = defineProps<{
  fixed?: boolean,
  label: string,
  to: string,
  icon: string,
  excludeUrl?: string[]
}>()

const route = useRoute()

const isActive = computed(() => {
  return prop.fixed ? (route.fullPath === prop.to) : route.fullPath.startsWith(prop.to)
})

</script>

