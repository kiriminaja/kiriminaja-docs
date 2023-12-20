<script setup lang="ts">
import Account from "./Account.vue";

defineProps<{
  icon: 'academy' | 'compass' | 'note' | 'instagram' | 'account',
  isActive?: boolean
}>()
</script>

<template>
  <IconAcademy :in-active="isActive" v-if="icon == 'academy'"/>
  <IconCompass :in-active="isActive" v-else-if="icon == 'compass'"/>
  <IconNote :in-active="isActive" v-else-if="icon == 'note'"/>
  <IconInstagram :in-active="isActive" v-else-if="icon == 'instagram'"/>
  <Account v-else-if="icon == 'acount'"/>
</template>

<style scoped>

</style>
