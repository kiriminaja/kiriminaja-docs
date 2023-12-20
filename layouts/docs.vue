<template>
  <NuxtLoadingIndicator/>
  <div class="md:ml-[6rem] pb-36 md:pb-7">
    <Navbar/>
    <Sidebar/>
    <section>
      <div class="container px-4 md:w-11/12 mx-auto">
        <div class="md:flex gap-10">
          <SectionCategory :read-mode="true"/>
          <slot/>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
</script>
