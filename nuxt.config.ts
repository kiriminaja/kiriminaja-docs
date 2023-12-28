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
    app: {
        head: {
            htmlAttrs: {
                lang: 'id'
            },
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: true
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Roboto+Mono:ital,wght@0,400;0,500;1,400;1,500&display=swap',
                    rel: 'stylesheet'
                }
            ]
        }
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
