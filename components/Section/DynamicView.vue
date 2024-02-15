<template>
    <SectionHomeHelp v-if="isHelp()"/>
    <SectionHomeDeveloper v-else/>
</template>
<script setup lang="ts">
const XsHelp = isHelp()
</script>
