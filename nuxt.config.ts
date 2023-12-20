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
        '@pinia/nuxt',
    ],
    image: {
        domains: [
            'images.ctfassets.net'
        ],
        alias: {
            cf: 'images.ctfassets.net'
        },
        contentful: {}
    },
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
        apiKey: process.env.ALGOLIA_APP_KEY || '',
        applicationId: process.env.ALGOLIA_APP_ID || '',
        // DocSearch key is used to configure DocSearch extension.
        docSearch: {
            indexName: process.env.ALGOLIA_INDEX_NAME || '',
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
