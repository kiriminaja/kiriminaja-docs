<template>
  <div v-if="readMode" class="md:block sticky z-[199] md:z-[1] top-16 md:top-20 mb-3 bg-background md:bg-transparent py-4 md:py-0 md:static">
    <div class="flex gap-3 md:grid overflow-y-auto md:top-24 md:w-[15rem]">
      <div class="shrink-0 md:shrink" v-for="(item, key) in results" :key="`c-${key}`">
        <SectionCategoryGroup :item="item"/>
      </div>
    </div>
  </div>
  <div v-else class="grid gap-5 md:grid-cols-3 md:gap-7">
    <div v-for="(item, key) in results" :key="`head-${key}`"
         class="relative transition-all group overflow-hidden bg-surface p-5 rounded-3xl"
    >
      <md-ripple></md-ripple>
      <div class="flex items-center gap-5">
        <div
            class="bg-secondaryContainer relative px-4 py-3.5 items-center aspect-square rounded-full text-onSecondaryContainer group-hover:bg-primary group-hover:text-onPrimary"
        >
          <span class="font-semibold leading-tight text-lg" v-text="key >= 9 ? (key+1) : `0${key+1}`"></span>
        </div>
        <div class="grow">
          <h3 class="font-semibold text-xl text-onPrimaryContainer" v-text="item.title"></h3>
        </div>
        <NuxtLink :to="item._path" class="absolute inset-0"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import '@material/web/ripple/ripple.js';

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation('docs'))
const results = navigation.value[0].children

defineProps<{
  readMode?: boolean
}>()
</script>
