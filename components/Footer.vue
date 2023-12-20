<template>
  <footer class="mt-4 md:mt-10 py-8">
    <SectionContainer>
      <div v-text="headers">
      </div>
      <div class="md:flex">
        <div class="grow">
          <span>&copy; </span>
          <span v-text="new Date().getFullYear()"></span>
          <span> PT. Selalu Siap Solusi</span>
        </div>
        <div>
          <span>Made with ❤️ from </span>
          <span class="font-medium">Palagan, Yogyakarta</span>
        </div>
      </div>
    </SectionContainer>
  </footer>
</template>
<script setup lang="ts">
const headers = ref(null as any)
onMounted(() => {
  let req = new XMLHttpRequest();
  req.open('GET', document.location, true);
  req.send(null);
  req.onload = function () {
    headers.value = JSON.stringify(req.getAllResponseHeaders().toLowerCase());
  };
})
</script>
