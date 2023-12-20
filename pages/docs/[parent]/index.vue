<template>
  <SectionDocs :article="article" :parent="parent"></SectionDocs>
</template>
<script setup lang="ts">
const route = useRoute()
const parent = route.params.parent

const {data: article} = await useAsyncData('article', () => {
  return queryContent(`/docs/${parent}`).where({
    '_path': `/docs/${parent}`
  }).findOne();
})

definePageMeta({
  layout: 'docs'
})

const {data: projects} = await useAsyncData('category-childs', () => {
  return queryContent(`/docs/${parent}/`).only(['title', 'description', 'image_url', 'url', 'stacks', '_path']).sort({
    '_file': 1
  }).find();
})

if (!!!article.value.body) {
  navigateTo(projects.value[0]._path.includes('_dir') ? projects.value[1]._path : projects.value[0]._path)
}

</script>
