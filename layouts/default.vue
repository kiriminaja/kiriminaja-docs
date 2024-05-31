<template>
  <NuxtLoadingIndicator/>
  <div>
    <div class="min-h-[calc(89vh-2rem)]">
      <Navbar/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>
