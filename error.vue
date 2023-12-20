<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <div class="antialiased bg-background grid min-h-screen place-content-center overflow-hidden">
    <div class="max-w-520px text-center z-20">
      <h1 class="text-8xl sm:text-10xl font-medium mb-8">{{ error.statusCode }}</h1>
      <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" v-text="error.statusMessage || 'Oops'"></p>
      <button @click="handleError" class="py-3 px-5 bg-primary text-onPrimary font-medium rounded-full">Back Home</button>
    </div>
  </div>
</template>
