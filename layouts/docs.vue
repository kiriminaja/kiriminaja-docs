<template>
  <BaseLayout>
    <main class="py-16">
      <SectionContainer>
        <div class="grid grid-cols-12">
          <div class="col-span-10 lg:order-2">
            <slot/>
          </div>
          <div class="col-span-2 lg:order-1">
            <SectionCategory :read-mode="true"/>
          </div>
        </div>
      </SectionContainer>
    </main>
  </BaseLayout>
</template>
<script setup>
import BaseLayout from './default.vue'
</script>
