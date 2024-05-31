<template>
  <AlgoliaDocSearch
      placeholder="Developer, cari kode mu"
      :searchParameters="{}"
      :disableUserPersonalization="false"
      initialQuery=""
      :translations="{}"
  />
</template>
<script setup lang="ts">
const config = useRuntimeConfig()

const mode = config.public.appMode

const route = useRoute()
const isDocs = mode === 'developer'

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
