<script setup lang="ts">
import '@material/web/ripple/ripple.js';

const colorMode = useColorMode()
const switchColor = () => {
  if (colorMode.preference == 'light') {
    colorMode.preference = "dark"
  } else if (colorMode.preference == 'dark') {
    colorMode.preference = "system"
  } else if (colorMode.preference == 'system') {
    colorMode.preference = "light"
  }
}

const iconString = computed(() => {
  let icon = "devices_other"
  if (colorMode.preference == 'light') {
    icon = "dark_mode"
  } else if (colorMode.preference == 'dark') {
    icon = "devices_other"
  } else if (colorMode.preference == 'system') {
    icon = "light_mode"
  }
  return icon
})
</script>

<template>
  <div class="flex items-start relative group p-2 hover:bg-surfaceVariant rounded-full">
    <md-ripple/>
    <span class="material-symbols-outlined group-hover:filled" v-text="iconString"></span>
    <button class="absolute inset-0" @click="switchColor()"></button>
  </div>
</template>

<style scoped>

</style>
