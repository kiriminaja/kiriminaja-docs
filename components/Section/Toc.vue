<template>
  <client-only>
    <div v-if="article.body.hasOwnProperty('toc')">
      <h3 class="font-semibold mb-4 leading-6">Akses Cepat</h3>
      <ul class="grid prose gap-3">
        <li :class="[
          route.fullPath.endsWith(`#${item.id}`) ? 'text-primary' : '',
          'text-md'
      ]" v-for="(item, key) in article.body.toc.links" :key="`toc-${key}`"
        >
          <NuxtLink :to="{
          hash: `#${item.id}`
        }" v-text="item.text" :external="true"
          ></NuxtLink>
        </li>
      </ul>
    </div>
  </client-only>
</template>
<script lang="ts" setup>
const route = useRoute()
defineProps<{
  article: object
}>()

</script>
