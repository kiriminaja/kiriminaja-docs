<template>
  <div class="grow grid md:grid-cols-10 gap-10">
    <div class="prose prose-primary md:col-span-7 my-4 dark:prose-invert max-w-none">
      <div class="text-primary mb-3 font-medium"
           v-text="parent.replace('-',' ').replace(/\b[a-z]/g, letter => letter.toUpperCase())"
      ></div>
      <ContentRenderer :value="article"/>
    </div>
    <div class="md:col-span-3">
      <div class="px-8 text-sm sticky top-28">
        <div v-if="article.hasOwnProperty('endpoint')">
          <h3 class="font-semibold mb-4 leading-6">Endpoint</h3>
          <div class="bg-surface ring-2 ring-success p-3 w-full rounded-xl text-success" v-text="article.endpoint"></div>
          <hr class="my-3 border-dashed border-outlineVariant">
        </div>
        <SectionToc :article="article"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  article: object,
  parent: string
}>()

onMounted(() => {
  const COPY_ICON = `<svg width="16" height="16" class="inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 1H4.5C3.4 1 2.5 1.9 2.5 3V17H4.5V3H16.5V1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM19.5 21H8.5V7H19.5V21Z" fill="currentColor"/>
</svg>
`
  const COPIED_ICON = `<svg width="16" height="16" class="inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 6H6.25V9H16.25V6H18.25V11H20.25V6C20.25 4.9 19.35 4 18.25 4H14.07C13.65 2.84 12.55 2 11.25 2C9.95 2 8.85 2.84 8.43 4H4.25C3.15 4 2.25 4.9 2.25 6V20C2.25 21.1 3.15 22 4.25 22H10.25V20H4.25V6ZM11.25 4C11.8 4 12.25 4.45 12.25 5C12.25 5.55 11.8 6 11.25 6C10.7 6 10.25 5.55 10.25 5C10.25 4.45 10.7 4 11.25 4Z" fill="currentColor"/>
<path d="M20.25 12.5L14.76 18L11.75 15L10.25 16.5L14.76 21L21.75 14L20.25 12.5Z" fill="currentColor"/>
</svg>
`

  const copyToClipboard = async (str: string) => {
    await navigator.clipboard.writeText(str)
  }
  const handleCopyClick = async (evt: Event, returnElem: Element) => {
    // @ts-ignore
    const {children} = evt?.target?.parentElement?.parentElement
    console.log(children)
    if (children) {
      // @ts-ignore
      const {innerText} = Array.from(children)[0]
      await copyToClipboard(innerText)
      returnElem.innerHTML = COPIED_ICON
      setTimeout(() => {
        returnElem.innerHTML = COPY_ICON
      }, 500)
    }
  }

  const highlights = document.querySelectorAll("pre")
  highlights.forEach(div => {
    div.classList.add("relative", "group", "rounded-xl")
    // create the copy button
    const copy = document.createElement("button")
    copy.classList.add(
        "bg-onBackground",
        "p-2",
        "text-xs",
        "rounded-lg",
        "opacity-0",
        "group-hover:opacity-100",
        "transition-all",
        "absolute",
        "right-2",
        "top-2"
    )
    copy.innerHTML = COPY_ICON
    // add the event listener to each click
    copy.addEventListener("click", async (event: Event) => {
      await handleCopyClick(event, copy)
    })
    // append the copy button to each code block
    div.append(copy)
  })

})
</script>
