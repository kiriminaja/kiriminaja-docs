export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    runtimeConfig: {
        ctfToken: process.env.CTF_TOKEN || '',
        public: {
            appMode: process.env.APP_MODE || 'help'
        }
    },
    modules: [
        '@nuxtjs/algolia',
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode'
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
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
                    rel: 'stylesheet'
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
                    rel: 'stylesheet'
                },
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
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.includes('md')
        }
    }
})
