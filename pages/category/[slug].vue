<template>
  <SectionHero :title="category.title"
               :description="category.description"
  />
  <div class="grid gap-2">
    <div v-for="(article, key) in category.articles" :key="`key-${key}`"
         class="relative bg-surfaceContainerLow hover:bg-secondaryContainer px-5 rounded-xl py-4 lg:px-6 lg:py-5 hover:text-primary border-b-outlineVariant"
    >
      <md-ripple/>
      <h3 class="text-lg mb-1.5 font-medium md:text-xl grow" v-text="article.fields.title"></h3>
      <p class="line-clamp-2" v-text="article.fields.description"></p>
      <NuxtLink :to="`/article/${article.fields.slug}`" class="inset-0 absolute"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import '@material/web/ripple/ripple.js';
if (!isHelp()) {
  navigateTo('/')
}
const route = useRoute()
const slug = route.params.slug

const {data: category} = await useAsyncData('category', () => $fetch(`/api/help/categories/${slug}`))

if (typeof category.value === 'undefined' || category.value === null) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Kategori artikel tidak ditemukan',
    statusText: 'Yohooo artikel yang kamu maksud tidak adaaa wkwk'
  })
}

useHead({
  title: category.value.title + ' – Knowledge Center'
})

definePageMeta({
  layout: 'help'
})

</script>
