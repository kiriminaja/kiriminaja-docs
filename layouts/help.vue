<template>
  <NuxtLoadingIndicator/>
  <div class="md:ml-[6rem] pb-36 md:pb-7">
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
<script setup lang="ts">
import EntryCategory from "../components/Section/EntryCategory.vue";
const route = useRoute()

watch(() => route.fullPath, newFullPath => {
  if (newFullPath.includes('#')) {
    const anchor = newFullPath.split('#')[1]
    const elem = document.getElementById(anchor)
    if (anchor) {
      setTimeout(() => {
        const y = elem.offsetTop;
        console.log(y)
        window.scroll({
          top: y - 90,
          behavior: 'smooth',
        });
      }, 50)
    }
  }
}, {deep: true, immediate: true})
</script>
