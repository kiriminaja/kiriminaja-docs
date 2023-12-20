<template>
  <div class="xl:mx-24">
    <AlgoliaDocSearch
        v-if="isDocs"
        placeholder="Developer, cari kode mu"
        :searchParameters="{}"
        :disableUserPersonalization="false"
        initialQuery=""
        :translations="{}"
    />
    <div v-else class="relative" tabindex="-1" @mouseleave="showMenu = false">
      <div :class="[
          'relative flex bg-surfaceContainer',
          (results.length > 0 && showMenu ? 'rounded-t-xl' : 'rounded-full')
      ]">
        <svg width="20" height="20" class="absolute top-1/2 -translate-y-1/2 text-onSurface left-4" viewBox="0 0 20 20">
          <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor" fill="none" fill-rule="evenodd" stroke-width="1.75" stroke-linecap="round"
              stroke-linejoin="round"
          ></path>
        </svg>
        <input @input="showMenu = true" v-model="input" :placeholder="isDocs ? 'Cari tahu tentang suatu API' : 'Temukan artikel yang kamu cari'"
               type="search"
               class="placeholder-onSurfaceVariant bg-transparent rounded-full outline-none w-full py-3 pl-10 pr-4"
        >
      </div>
      <div v-if="results.length > 0 && showMenu" class="absolute top-full overflow-hidden w-full rounded-b-xl border-t border-t-outlineVariant bg-surfaceContainer">
        <ul>
          <li v-for="(result, key) in results" :key="`r-${key}`" class="relative py-3 px-5 hover:bg-secondaryContainer hover:text-primary">
            <span v-text="result.fields.title"></span>
            <NuxtLink :to="`/article/${result.fields.slug}`" class="absolute inset-0"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const isDocs = computed(() => {
  return route.fullPath.startsWith('/docs')
})

const input = ref('')
const results = ref([])

const showMenu = ref(false)

let debounce = null

watch(input, newValue => {
  if (debounce) {
    clearTimeout(debounce)
  }
  if (newValue.length >= 3) {
    debounce = setTimeout(async () => {
      const {data: searchResults} = await useAsyncData('results', () => $fetch(`/api/help/articles/search?query=${newValue}`))
      results.value = searchResults.value
    }, 500)
  } else {
    results.value = []
  }
})
</script>
