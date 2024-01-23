<template>
    <SectionHomeHelp v-if="mode === 'help' || mode === 'both'"/>
    <SectionHomeDeveloper v-else/>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()

const mode = config.public.appMode
</script>
