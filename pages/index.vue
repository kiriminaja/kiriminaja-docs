<template>
  <section>
    <SectionContainer>
      <SectionHero title="Buku lengkap Solusi Pengirimanmu!"
                   description="Beragam artikel pengetahuan umum lengkap untuk membantu Anda memahami dan menyelesaikan pengiriman bersama KiriminAja dengan gampang."
      />
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div class="bg-surface relative group hover:ring-4 hover:ring-primary p-5 items-start flex gap-4 rounded-3xl transition-all"
             v-for="(category, key) in data.items" :key="`cat-${key}`"
        >
          <div
              class="bg-secondaryContainer p-3 flex rounded-full text-onSecondaryContainer group-hover:bg-primary group-hover:text-onPrimary"
          >
            <IconNote/>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2" v-text="category.fields.title"></h3>
            <p v-text="category.fields.description" class="text-lg"></p>
            <NuxtLink :to="`/category/${category.fields.slug}`" class="absolute inset-0"/>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: "Knowledge Center"
})
const {data} = await useAsyncData('categories', () => $fetch('/api/help/categories'))
</script>
