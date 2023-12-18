<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as PropType<{ label: string }[]>,
    required: true
  },
  activeTabIndex: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:activeTabIndex'])

const tabsRef = ref()

const highlightUnderline = ref()

const updateHighlightUnderlinePosition = (activeTab: any) => {
  if (!activeTab) {
    return
  }

  highlightUnderline.value.style.insetInlineStart = `${activeTab.offsetLeft}px`
  highlightUnderline.value.style.width = `${activeTab.clientWidth}px`
}

const updateTabs = ($event: any, i: any) => {
  emit('update:activeTabIndex', i)
  nextTick(() => updateHighlightUnderlinePosition($event.target))
}

watch(
  tabsRef,
  (newVal) => {
    if (!newVal) {
      return
    }

    setTimeout(() => {
      updateHighlightUnderlinePosition(tabsRef.value.children[props.activeTabIndex])
    }, 50)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="tabs-header overflow-hidden relative border-dashed text-outlineVariant rounded-t-lg px-3 py-2.5">
    <span class="bg-surfaceBright inset-0 absolute opacity-25"></span>
    <div v-if="tabs" ref="tabsRef" class="tabs gap-3 flex relative">
      <button
        v-for="({ label }, i) in tabs"
        :key="`${i}${label}`"
        :class="[
            'px-4 py-0.5 font-medium',
            activeTabIndex === i ? 'active text-onInverseSurface dark:text-primary ring-2 ring-onInverseSurface dark:ring-primary rounded-full' : 'not-active'
            ]"
        @click="updateTabs($event, i)"
      >
        {{ label }}
      </button>
      <span
        ref="highlightUnderline"
        class="highlight-underline"
      >
        <span class="tab" />
      </span>
    </div>

    <slot name="footer" />
  </div>
</template>
