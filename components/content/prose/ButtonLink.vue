<template>
  <NuxtLink :to="href" class="inline-block">
    <md-filled-button>
      <slot/>
    </md-filled-button>
  </NuxtLink>
</template>

<script setup lang="ts">
import '@material/web/button/filled-button.js';

defineProps<{
  href: string,
}>()
</script>
