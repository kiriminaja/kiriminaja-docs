<template>
  <LayoutBase>
    <section>
      <SectionContainer>
        <EntryCategory/>
        <slot/>
      </SectionContainer>
    </section>
  </LayoutBase>
  <NuxtLoadingIndicator/>
</template>
<script setup lang="ts">
import EntryCategory from "../components/Section/EntryCategory.vue";
import LayoutBase from "../components/Section/LayoutBase.vue";
</script>
