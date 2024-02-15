<template>
  <div class="sticky top-16 md:top-20 z-50 bg-background py-3">
    <client-only>
      <md-chip-set>
        <md-filter-chip :selected="route.fullPath.includes(`/category/${item.fields.slug}`)"
                        @click="navigateTo(`/category/${item.fields.slug}`)" v-for="(item, i) in categories.items"
                        :label="item.fields.title"
        ></md-filter-chip>
      </md-chip-set>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js';

const route = useRoute()
const {data: categories} = await useAsyncData('categories', () => $fetch('/api/help/categories'))

</script>
