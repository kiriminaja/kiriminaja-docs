<template>
  <BaseLayout>
    <main class="py-4 lg:py-16">
      <SectionContainer>
        <div class="grid lg:gap-12 lg:grid-cols-12">
          <div class="lg:col-span-10 lg:order-2">
            <slot/>
          </div>
          <div class="lg:col-span-2 lg:order-1">
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
