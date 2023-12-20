<template>
  <NuxtLoadingIndicator/>
  <div class="md:ml-[6rem]">
    <Navbar/>
    <Sidebar/>
    <slot/>
  </div>
</template>
<script setup lang="ts"></script>
