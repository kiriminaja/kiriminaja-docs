<template>
  <div>
    <NuxtLink :to="href" class="px-4 py-3 rounded-full bg-primary not-prose text-onPrimary">
      <slot />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    href: {
      type: String
    }
  }
};
</script>
