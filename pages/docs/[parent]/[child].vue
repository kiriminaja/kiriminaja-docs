<template>
  <SectionDocs :article="article" :parent="parent"></SectionDocs>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()

const mode = config.public.appMode
if (mode !== 'developer') {
  navigateTo('/')
}
const route = useRoute()
const parent = route.params.parent
const slug = route.params.child

const {data: article} = await useAsyncData('article', () => {
  return queryContent(`/docs/${parent}/`).where({
    '_path': `/docs/${parent}/${slug}`
  }).findOne();
})

definePageMeta({
  layout: 'docs'
})

useHead({
  title: article.value.title + ' – Docs'
})

</script>
