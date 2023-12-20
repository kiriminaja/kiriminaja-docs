<template>
  <div class="grow grid md:grid-cols-10 gap-10">
    <div class="prose prose-primary md:col-span-7 my-4 dark:prose-invert max-w-none">
      <div class="text-primary mb-3 font-medium">Knowledge Center</div>
      <div class="mb-3">
        <h1 id="province" class="not-prose mb-3 text-xl md:text-5xl font-semibold" v-text="category.title"></h1>
        <p v-text="category.description"></p>
      </div>
      <div class="grid gap-2">
        <div v-for="(article, key) in category.articles" :key="`key-${key}`" class="relative bg-surfaceContainerLow px-5 rounded-lg first:rounded-t-3xl last:rounded-b-3xl lg:flex py-3 md:py-4 hover:text-primary border-b-outlineVariant">
          <h3 class="text-lg font-medium md:text-xl not-prose grow" v-text="article.fields.title"></h3>
          <span class="text-primary shrink-0 font-medium">Selengkapnya</span>
          <NuxtLink :to="`/article/${article.fields.slug}`" class="inset-0 absolute"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
