<template>
  <LayoutBase>
    <section>
      <SectionContainer>
        <div class="md:flex gap-10">
          <SectionCategory :read-mode="true"/>
          <slot/>
        </div>
      </SectionContainer>
    </section>
  </LayoutBase>
</template>
<script setup>
import LayoutBase from "../components/Section/LayoutBase.vue";
</script>
