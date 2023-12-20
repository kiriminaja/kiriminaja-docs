<template>
  <NuxtLoadingIndicator/>
  <div class="md:ml-[6rem]">
    <div class="min-h-[calc(89vh-2rem)]">
      <Navbar/>
      <Sidebar/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
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
