<template>
  <div class="text-center not-prose w-full py-3 md:py-5 relative">
    <md-ripple/>
    <img
        class="inline-block max-w-[90vw] md:max-w-[25rem] rounded-xl shadow-md"
        loading="lazy"
        :src="refinedSrc"
        :alt="alt"
        :width="width"
        :height="height"
    />
    <button type="button" @click="expand = true"
            class="inset-0 absolute"
    />
  </div>
  <div v-if="expand" class="fixed text-center py-3 flex justify-center items-center z-[1024] top-0 left-0 w-screen h-screen">
    <span class="inset-0 absolute bg-[#000000] opacity-25"></span>
    <div class="relative inline-block z-99">
      <button type="button" class="bg-surfaceDim outline outline-outlineVariant top-0 right-0 translate-x-1/2 -translate-y-1/2 absolute p-3 rounded-full" @click="expand = false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="currentColor"
          />
        </svg>
      </button>
      <img
          class="inline-block m-0 max-w-[70vw] rounded-md"
          :src="refinedSrc"
          :alt="alt"
          loading="lazy"
          :width="width"
          :height="height"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {withTrailingSlash, withLeadingSlash, joinURL} from 'ufo'
import {useRuntimeConfig, computed} from '#imports'
import '@material/web/ripple/ripple.js';

const expand = ref(false)

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>
