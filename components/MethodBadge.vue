<template>
  <span :class="[
      colorScheme[method],
      'px-1.5 py-1 rounded text-xs font-semibold'
  ]" v-text="method"></span>
</template>
<script setup lang="ts">
const prop = defineProps<{
  method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'
}>()

const colorScheme = {
  POST: 'bg-infoContainer text-info',
  GET: 'bg-successContainer text-success',
  DELETE: 'bg-errorContainer text-error',
  PUT: 'bg-warningContainer text-warning',
  PATCH: 'bg-secondaryContainer text-secondary',
}
</script>
