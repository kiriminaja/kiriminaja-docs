<template>
  <nav class="py-4 z-[100] sticky top-0 backdrop-blur-2xl bg-background">
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
        <div class="flex gap-5">
          <NuxtLink to="https://twitter.com/kiriminajacom">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
                  fill="currentColor"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import Logo from "./Icon/Logo.vue";
</script>
