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
        <div class="flex gap-5">
          <NuxtLink to="https://twitter.com/kiriminajacom">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
                  fill="currentColor"
              />
            </svg>
          </NuxtLink>
          <NuxtLink to="https://github.com/kiriminaja">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_162_5679)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                      fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_162_5679">
                  <rect width="48" height="48" fill="currentColor"/>
                </clipPath>
              </defs>
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
