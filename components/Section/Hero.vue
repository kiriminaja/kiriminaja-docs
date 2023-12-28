<template>
  <div class="mb-5 md:mb-14 mt-4 md:mt-12 col-span-3 rounded-3xl">
    <div class="grid md:grid-cols-6">
      <div class="md:col-span-4">
        <div class="md:w-3/4">
          <h1 :class="[
              'text-3xl md:text-5xl md:leading-tight font-semibold',
              {
                'mb-4': description
              }
          ]" v-text="title"></h1>
          <p class="text-lg slider-description text-onSurfaceVariant xl:w-9/12" v-if="description" v-text="description"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: {
    type: String
  },
  description?: string
}>()
</script>
