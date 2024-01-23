<template>
  <SectionHero :title="category.title"
               :description="category.description"
  />
  <div class="grid gap-2">
    <div v-for="(article, key) in category.articles" :key="`key-${key}`"
         class="relative bg-surfaceContainerLow hover:bg-secondaryContainer px-5 rounded-lg first:rounded-t-3xl last:rounded-b-3xl lg:flex py-4 hover:text-primary border-b-outlineVariant"
    >
      <h3 class="text-lg font-medium md:text-xl grow" v-text="article.fields.title"></h3>
      <span class="text-primary shrink-0 font-medium">Selengkapnya</span>
      <NuxtLink :to="`/article/${article.fields.slug}`" class="inset-0 absolute"/>
    </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()

const mode = config.public.appMode
if (mode !== 'help') {
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
