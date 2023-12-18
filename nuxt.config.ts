export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    runtimeConfig: {
        ctfToken: process.env.CTF_TOKEN || ''
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode',
        'nuxt-anchorscroll',
    ],
    anchorscroll: {
        hooks: [
            // Or any valid hook if needed
            // Default is `page:finish`
            'page:transition:finish',
        ],
    },
    css: [
        '~/assets/main.css'
    ],
    colorMode: {
        classSuffix: '',
    },
    content: {
        highlight: {
            theme: 'dracula'
        },
    }
})
