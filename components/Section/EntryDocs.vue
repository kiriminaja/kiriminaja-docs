<template>
  <div class="md:grow md:grid md:grid-cols-10 gap-10">
    <div class="md:col-span-3 md:order-2">
      <div class="md:px-8 text-sm md:sticky md:top-48">
        <slot name="toc"/>
      </div>
    </div>
    <div class="prose prose-primary md:order-1 md:col-span-7 my-4 dark:prose-invert max-w-none">
      <div class="text-primary mb-3 font-medium" v-text="parent || 'Knowledge Center'"></div>
      <div class="mb-3">
        <TitleBar :title="title"/>
        <p v-text="description"></p>
      </div>
      <slot/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ProseH1} from "../content/prose/ProseH1.vue";
import TitleBar from "./TitleBar.vue";

defineProps<{
  title: string,
  description: string,
  parent?: string
}>()
</script>
