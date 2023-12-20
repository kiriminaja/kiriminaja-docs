<template>
  <EntryDocs :title="article.fields.title" :description="article.fields.description" :parent="'Knowledge Center'">
    <div class="aspect-video rounded-lg overflow-hidden mb-5" v-if="ytLink">
      <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${ytLink}`"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
      ></iframe>
    </div>
    <ContentRendererMarkdown :value="mdResult"/>
    <template #toc>
      <Toc :article="mdResult"/>
    </template>
  </EntryDocs>
</template>
<script setup lang="ts">
import EntryDocs from "../../components/Section/EntryDocs.vue";
import Toc from "../../components/Section/Toc.vue";
import markdownParser from "@nuxt/content/transformers/markdown";

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

const mdResult = await markdownParser.parse('custom.md', article.value.fields.content)
const ytLink = ref(null)
if (article.value.fields.ytLink) {
  const url = new URL(article.value.fields.ytLink)
  ytLink.value = url.searchParams.get('v')

  if (article.value.fields.ytLink.includes('youtu.be')) {
    ytLink.value = article.value.fields.ytLink.replace('https://youtu.be/','')
  }
}
useHead({
  title: article.value.fields.title
})

definePageMeta({
  layout: 'help'
})
</script>
