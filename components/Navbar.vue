<template>
  <div
      class="sticky top-0 z-[99] pb-2.5 md:py-4 gap-2 backdrop-blur md:gap-3"
  >
    <div class="bg-surface absolute inset-0 opacity-70"></div>
    <SectionContainer class="relative">
      <div class="grid grid-cols-5 items-center">
        <div class="col-span-1">
          <div class="relative">
            <IconLogo/>
            <NuxtLink to="/" class="absolute inset-0"/>
          </div>
        </div>
        <div class="flex col-span-3 justify-center">
          <NavigationButton icon="mode_heat" :fixed="true" label="Docs" :to="'/'"/>
          <NavigationButton icon="groups" label="Teams" :to="'/teams'"/>
        </div>
        <div class="col-span-1 flex items-center justify-end">
          <IconDarkMode/>
          <Search/>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>
<script setup lang="ts">
</script>
