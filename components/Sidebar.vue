<template>
  <div class="w-full z-[999] md:w-[6rem] pt-3 pb-4 md:pb-4 fixed bottom-0 gap-2 md:gap-3 md:top-0 md:left-0 bg-surfaceContainerLow">
    <div class="md:flex h-full md:flex-col">
      <div class="flex flex-row lg:block">
        <NavigationButton icon="note" v-if="mode == 'help'" :active-when="[
            'article',
            'category'
        ]" :fixed="true" label="Help" to="/" :exclude-url="[
        '/docs',
    ]"
        />
        <NavigationButton v-else icon="compass" label="Code" :to="'/'"/>
        <NavigationButton icon="academy" label="Youtube" target="_blank" to="https://www.youtube.com/kiriminaja"/>
      </div>
      <div class="md:mt-auto text-center hidden lg:inline-block">
        <IconDarkMode/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()

const mode = config.public.appMode
</script>