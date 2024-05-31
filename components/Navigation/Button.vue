<template>
  <div :class="[
      'relative px-4 py-2.5 items-start flex gap-3 rounded-full group',
      (isActive ? 'bg-secondaryContainer text-onSecondaryContainer' : '')
  ]">
    <md-ripple></md-ripple>
    <span v-text="icon" :class="[
              'material-symbols-outlined align-middle',
              (isActive ? 'filled' : 'group-hover:filled')
          ]"></span>
    <span v-text="label"></span>
    <NuxtLink :to="to" :target="target || '_self'" class="absolute inset-0"/>
  </div>
</template>
<script lang="ts" setup>
import '@material/web/ripple/ripple.js';

const prop = defineProps<{
  fixed?: boolean,
  label: string,
  to: string,
  target?: string,
  icon: string,
  excludeUrl?: string[],
  activeWhen?: string[]
}>()

const route = useRoute()

const isActive = computed(() => {
  let active = prop.fixed ? (route.fullPath === prop.to) : route.fullPath.startsWith(prop.to)
  if (prop.activeWhen) {
    prop.activeWhen.forEach((path) => {
      if (route.fullPath.includes(path)) {
        active = true
      }
    })
  }
  return active;

})
</script>
<style scoped>
:root {
  --md-ripple-hover-color: transparent;
}
</style>
