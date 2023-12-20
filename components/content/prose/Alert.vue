<template>
  <div :class="[
      'div px-5 flex not-prose gap-3 rounded-2xl py-3 mb-3',
      (type === 'info' ? 'bg-infoContainer text-info' : ''),
      (type === 'warning' ? 'bg-warningContainer text-warning' : ''),
      (type === 'success' ? 'bg-successContainer text-success' : ''),
      (type === 'danger' ? 'bg-errorContainer text-error' : ''),
  ]"
  >
    <div>
      <svg v-if="type === 'warning'" width="24" class="inline-block shrink-0" height="24" viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M4.47 20.5038H19.53C21.07 20.5038 22.03 18.8338 21.26 17.5038L13.73 4.49378C12.96 3.16378 11.04 3.16378 10.27 4.49378L2.74 17.5038C1.97 18.8338 2.93 20.5038 4.47 20.5038ZM12 13.5038C11.45 13.5038 11 13.0538 11 12.5038V10.5038C11 9.95378 11.45 9.50378 12 9.50378C12.55 9.50378 13 9.95378 13 10.5038V12.5038C13 13.0538 12.55 13.5038 12 13.5038ZM13 17.5038H11V15.5038H13V17.5038Z"
            fill="currentColor"
        />
      </svg>
      <svg v-else-if="type === 'danger'" width="24" height="24" class="inline-block shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.325 3H8.68501C8.42501 3 8.165 3.11 7.985 3.29L3.295 7.98C3.115 8.16 3.005 8.42 3.005 8.68V15.31C3.005 15.58 3.115 15.83 3.295 16.02L7.975 20.7C8.165 20.89 8.42501 21 8.68501 21H15.315C15.585 21 15.835 20.89 16.025 20.71L20.705 16.03C20.895 15.84 20.995 15.59 20.995 15.32V8.68C20.995 8.41 20.885 8.16 20.705 7.97L16.025 3.29C15.845 3.11 15.585 3 15.325 3ZM12.005 17.3C11.285 17.3 10.705 16.72 10.705 16C10.705 15.28 11.285 14.7 12.005 14.7C12.725 14.7 13.305 15.28 13.305 16C13.305 16.72 12.725 17.3 12.005 17.3ZM12.005 13C11.455 13 11.005 12.55 11.005 12V8C11.005 7.45 11.455 7 12.005 7C12.555 7 13.005 7.45 13.005 8V12C13.005 12.55 12.555 13 12.005 13Z"
            fill="currentColor"
        />
      </svg>
      <svg v-else width="24" height="24" class="inline-block shrink-0" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
            fill="currentColor"
        />
      </svg>
    </div>
    <div class="grow">
      <slot/>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
      type: string
    }>(),
    {
      type: 'info'
    }
)
</script>
