<template>
  <NuxtLoadingIndicator/>
  <div class="md:ml-[6rem]">
    <Navbar/>
    <Sidebar/>
    <section>
      <div class="container px-4 md:w-11/12 mx-auto">
        <EntryCategory/>
        <slot/>
      </div>
    </section>
  </div>
</template>
<script setup>
import EntryCategory from "../components/Section/EntryCategory.vue";
</script>
