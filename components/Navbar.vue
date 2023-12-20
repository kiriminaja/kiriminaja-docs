<template>
  <nav class="py-3 md:py-4 z-[100] sticky top-0 backdrop-blur-2xl bg-background">
    <SectionContainer>
      <div class="flex gap-5 items-center">
        <div class="col-auto md:mr-10 hidden md:block">
          <div class="relative">
            <Logo/>
            <NuxtLink to="/" class="absolute inset-0"/>
          </div>
        </div>
        <div class="grow">
          <Search/>
        </div>
      </div>
    </SectionContainer>
  </nav>
</template>
<script setup lang="ts">
import Logo from "./Icon/Logo.vue";
</script>
