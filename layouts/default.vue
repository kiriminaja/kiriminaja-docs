<template>
  <NuxtLoadingIndicator/>
  <div class="md:ml-[6rem] pb-36 md:pb-7">
    <Navbar/>
    <Sidebar/>
    <slot/>
  </div>
</template>
<script setup lang="ts"></script>
