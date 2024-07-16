import 'dotenv/config'
import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from 'redocusaurus';


const config: Config = {
    title: "KiriminAja Developer",
    tagline: "Connected with more than 15 delivery couriers throughout Indonesia, it's easy to connect your customers with ease. Build your brand and business to move forward. Let's learn the documentation now.",
    favicon: "/favicon.ico",
    themes: [
        "docusaurus-json-schema-plugin",
        '@docusaurus/theme-mermaid'
    ],
    markdown: {
        mermaid: true
    },
    i18n: {
        defaultLocale: "en",
        locales: ["id", "en"],
        localeConfigs: {
            en: {
                label: "English",
                direction: "ltr",
                htmlLang: "en-US",
            },
            id: {
                label: "Bahasa",
                direction: "ltr",
                htmlLang: "id-ID",
            },
        },
    },

    // Set the production url of your site here
    url: "https://developer.kiriminaja.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
        // Redocusaurus config
        [
            'redocusaurus',
            {
                // Plugin Options for loading OpenAPI files
                specs: [
                    // Pass it a path to a local OpenAPI YAML file
                    {
                        // Redocusaurus will automatically bundle your spec into a single file during the build
                        spec: 'openapi/index.yaml',
                        route: '/api/',
                    },
                    // You can also pass it a OpenAPI spec URL
                    {
                        spec: 'https://redocly.github.io/redoc/openapi.yaml',
                        route: '/openapi/',
                    },
                ],
                // Theme Options for modifying how redoc renders them
                theme: {
                    // Change with your site colors
                    primaryColor: '#1890ff',
                },
            },
        ] satisfies Redocusaurus.PresetEntry,
    ],

    themeConfig: {
        // Replace with your project's social card
        algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_APP_KEY,
            indexName: process.env.ALGOLIA_INDEX_NAME,
            contextualSearch: true,
            externalUrlRegex: 'external\\.com|domain\\.com',
            replaceSearchResultPathname: {
                from: '/docs/', // or as RegExp: /\/docs\//
                to: '/',
            },
            searchParameters: {},
            searchPagePath: 'search',
            insights: false,
        },
        image: "img/cover.jpg",
        navbar: {
            logo: {
                alt: "KiriminAja Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Docs",
                },
                {to: "/blog", label: "Blog", position: "left"},
                {
                    type: "localeDropdown",
                    position: "right",
                },
            ],
        },
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} PT Selalu Siap Solusi.`,
        },
        prism: {
            theme: prismThemes.duotoneLight,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
