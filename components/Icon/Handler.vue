<script setup lang="ts">
defineProps<{
  icon: 'academy' | 'compass' | 'note' | 'instagram',
  isActive?: boolean
}>()
</script>

<template>
  <IconAcademy :in-active="isActive" v-if="icon == 'academy'"/>
  <IconCompass :in-active="isActive" v-else-if="icon == 'compass'"/>
  <IconNote :in-active="isActive" v-else-if="icon == 'note'"/>
  <IconInstagram :in-active="isActive" v-else-if="icon == 'instagram'"/>
</template>

<style scoped>

</style>
