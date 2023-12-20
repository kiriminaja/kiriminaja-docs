<template>
  <div class="w-full md:w-[6rem] py-4 fixed gap-3 md:top-0 md:left-0 bottom-0 bg-surfaceContainerLow">
    <div class="md:flex h-full md:flex-col">
      <div class="flex flex-row lg:block">
        <NavigationButton icon="note" :active-when="[
            'article',
            'category'
        ]" :fixed="true" label="Help" to="/" :exclude-url="[
        '/docs',
    ]"
        />
        <NavigationButton icon="compass" label="Code" to="/docs"/>
        <NavigationButton icon="academy" label="Youtube" target="_blank" to="https://www.youtube.com/kiriminaja"/>
      </div>
      <div class="md:mt-auto text-center hidden lg:inline-block">
        <IconDarkMode/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import DarkMode from "./Icon/DarkMode.vue";
</script>
