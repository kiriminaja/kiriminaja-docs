<template>
  <nav class="py-4 mb-4 sticky top-0 z-[99] backdrop-blur-2xl bg-background">
    <div class="container relative px-4 md:w-11/12 mx-auto">
      <div class="flex gap-5 items-center">
        <div class="col-auto md:mr-10">
          <div class="relative">
            <Logo/>
            <NuxtLink to="/" class="absolute inset-0"/>
          </div>
        </div>
        <div class="grow">
          <Search/>
        </div>
        <div>
          <Button/>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import Logo from "./Icon/Logo.vue";
</script>
