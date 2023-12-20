<template>
  <div class="xl:mx-24">
    <AlgoliaDocSearch
        v-if="isDocs"
        applicationId="XK3XUKUBBP"
        apiKey="65aaf53766ccd6891151ac6411706d93"
        indexName="developer-kiriminaja"
        placeholder="Developer, cari kode mu"
        :searchParameters="{}"
        :disableUserPersonalization="false"
        initialQuery=""
        :translations="{}"
    />
    <div v-else class="relative flex bg-surfaceContainer rounded-full">
      <svg width="20" height="20" class="absolute top-1/2 -translate-y-1/2 text-onSurface left-4" viewBox="0 0 20 20">
        <path
            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
            stroke="currentColor" fill="none" fill-rule="evenodd" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
        ></path>
      </svg>
      <input ref="input" :placeholder="isDocs ? 'Cari tahu tentang suatu API' : 'Temukan artikel yang kamu cari'"
             type="search"
             class="placeholder-onSurfaceVariant bg-transparent rounded-full outline-none w-full py-3 pl-10 pr-4"
      >
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const isDocs = computed(() => {
  return route.fullPath.startsWith('/docs')
})
</script>
