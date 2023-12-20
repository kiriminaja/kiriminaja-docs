<template>
  <EntryDocs :title="article.fields.title" :description="article.fields.description" :parent="'Knowledge Center'">
    <ContentRendererMarkdown :value="mdResult"/>
    <template #toc>
      <Toc :article="mdResult"/>
    </template>
  </EntryDocs>
</template>
<script setup lang="ts">
import {parseMarkdown} from "../../utils/parse-markdown";
import EntryDocs from "../../components/Section/EntryDocs.vue";
import Toc from "../../components/Section/Toc.vue";

const route = useRoute()
const slug = route.params.slug

const {data: article} = await useAsyncData('article', () => $fetch(`/api/help/articles/${slug}`))

if (typeof article.value === 'undefined' || article.value === null) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Artikel knowledge center tidak ditemukan',
    statusText: 'Yohooo artikel yang kamu maksud tidak adaaa wkwk'
  })
}

const mdResult = await parseMarkdown(article.value.fields.content)

useHead({
  title: article.value.fields.title
})

definePageMeta({
  layout: 'help'
})
</script>
