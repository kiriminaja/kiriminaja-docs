<script setup lang="ts">
const colorMode = useColorMode()
const switchColor = () => {
  if (colorMode.preference == 'light') {
    colorMode.preference = "dark"
  } else if (colorMode.preference == 'dark') {
    colorMode.preference = "system"
  } else if (colorMode.preference == 'system') {
    colorMode.preference = "light"
  }
}
</script>

<template>
  <div class="lg:w-[3.5rem] inline-block relative hover:bg-surfaceVariant aspect-square overflow-hidden rounded-full">
    <div :class="[
        'transition-all',
        colorMode.preference === 'system' ? '-translate-y-2/3' : (colorMode.preference  === 'dark' ? '-translate-y-1/3' : 'translate-y-0')
    ]"
    >
      <div class="p-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9.37 5.51C9.19 6.15 9.1 6.82 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.45 17.19 14.93 19 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51ZM12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"
              fill="currentColor"
          />
        </svg>
      </div>
      <div class="p-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2403_5594)">
            <path
                d="M20 8.69043V4.00043H15.31L12 0.69043L8.69 4.00043H4V8.69043L0.690002 12.0004L4 15.3104V20.0004H8.69L12 23.3104L15.31 20.0004H20V15.3104L23.31 12.0004L20 8.69043ZM18 14.4804V18.0004H14.48L12 20.4804L9.52 18.0004H6V14.4804L3.52 12.0004L6 9.52043V6.00043H9.52L12 3.52043L14.48 6.00043H18V9.52043L20.48 12.0004L18 14.4804ZM12 6.00043V18.0004C15.31 18.0004 18 15.3104 18 12.0004C18 8.69043 15.31 6.00043 12 6.00043Z"
                fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_2403_5594">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="p-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6ZM13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16C14 15.12 13.61 14.33 13 13.78V12ZM11 17.5C10.17 17.5 9.5 16.83 9.5 16C9.5 15.17 10.17 14.5 11 14.5C11.83 14.5 12.5 15.17 12.5 16C12.5 16.83 11.83 17.5 11 17.5ZM22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8ZM21 18H17V10H21V18Z"
              fill="currentColor"
          />
        </svg>
      </div>
    </div>
    <button class="absolute inset-0" @click="switchColor()"></button>
  </div>
</template>

<style scoped>

</style>
