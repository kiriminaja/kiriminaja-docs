import 'dotenv/config'
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import { bundledLanguages, type BundledLanguage } from "shiki";


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
    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            ({
                hashed: true
            })
        ],
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
        localeConfigs: {
            en: {
                label: "English",
                direction: "ltr",
                htmlLang: "en-US",
            }
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
                    editUrl: "https://github.com/kiriminaja/",
                    beforeDefaultRehypePlugins: [
                        [
                            rehypeShiki,
                            {
                                themes: {
                                    dark: 'material-theme-darker',
                                    light: 'material-theme-darker'
                                },
                                langs: ["js", "ts", "jsx", "tsx", "json", "bash" /* other languages */],
                                // alternatively, you can activate all bundled languages:
                                // langs: Object.keys(bundledLanguages) as BundledLanguage[]
                            } satisfies RehypeShikiOptions,
                        ],
                    ],
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/cover.jpg",
        navbar: {
            title: 'KiriminAja',
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
                {
                    to: "/blog",
                    label: "Blog",
                    position: "left"
                },
                {
                    href: "https://status.kiriminaja.com/",
                    label: "Status",
                    position: "left"
                },
                {
                    type: "localeDropdown",
                    position: "right",
                },
            ],
        },
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} PT Selalu Siap Solusi.`,
        }
    } satisfies Preset.ThemeConfig,
};

export default config;
