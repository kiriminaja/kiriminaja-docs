export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    runtimeConfig: {
        ctfToken: process.env.CTF_TOKEN || ''
    },
    modules: [
        '@nuxtjs/algolia',
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode',
        'nuxt-anchorscroll',
        '@pinia/nuxt',
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
    algolia: {
        apiKey: 'apiKey',
        applicationId: 'applicationId',
        // DocSearch key is used to configure DocSearch extension.
        docSearch: {
            indexName: 'indexName',
        }
    },
    colorMode: {
        classSuffix: '',
    },
    content: {
        highlight: {
            theme: 'material-theme-palenight'
        },
    }
})
