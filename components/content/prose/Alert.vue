<template>
  <div :class="[
      'div px-5 not-prose rounded-2xl py-3 mb-3',
      (type === 'info' ? 'bg-infoContainer text-info' : ''),
      (type === 'warning' ? 'bg-warningContainer text-warning' : ''),
      (type === 'success' ? 'bg-successContainer text-success' : ''),
      (type === 'danger' ? 'bg-errorContainer text-error' : ''),
  ]">
    <slot/>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
      type: string
    }>(),
    {
      type: 'info'
    }
)
</script>
