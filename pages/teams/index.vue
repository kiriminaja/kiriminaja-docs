<template>
  <SectionContainer>
    <SectionHero title="Our Team"/>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-10">
      <div v-for="(team, i) in teams" :key="`team-${i}`">
        <div class="aspect-square mb-3 w-full bg-primary rounded-3xl relative overflow-hidden">
          <img :src="team._path+'.png'" class="absolute bottom-0" alt="">
        </div>
        <h3 class="font-semibold" v-text="team.title"></h3>
        <p class="text-xs" v-text="team.role"></p>
      </div>
    </div>
  </SectionContainer>
</template>
<script setup lang="ts">
const {data: teams} = await useAsyncData('teams', () => {
  return queryContent(`/teams/`).sort({
    '_file': 1
  }).find();
})

useHead({
  title: 'Technology Team'
})
</script>
