const defaultTheme = require('tailwindcss/defaultTheme')
const colorWays: string[] = [
    'primary',
    'secondary',
    'tertiary',
    'error',
    'info',
    'success',
    'warning'
]

const ucFirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

let colors: any = {
    transparent: 'transparent'
}

let colorCodex: string[] = [
    "background",
    "onBackground",
    "outline",
    "outlineVariant",
    "surface",
    "onSurface",
    "surfaceVariant",
    "onSurfaceVariant",
    "inverseSurface",
    "onInverseSurface",
    "surfaceBright",
    "surfaceDim",
    "surfaceContainerLowest",
    "surfaceContainerLow",
    "surfaceContainer",
    "surfaceContainerHigh",
    "surfaceContainerHighest",
]

colorWays.forEach(v => {
    colors[`${v}`] = `var(--flux-${v})`
    colors[`on${ucFirst(v)}`] = `var(--flux-on${ucFirst(v)})`
    colors[`${v}Container`] = `var(--flux-${v}Container)`
    colors[`on${ucFirst(v)}Container`] = `var(--flux-on${ucFirst(v)}Container)`
})

colorCodex.forEach(v => {
    colors[`${v}`] = `var(--flux-${v})`
})

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./utils/*.{js,ts}",
        "./error.vue",
        "./node_modules/flowbite/**/*.js"
    ],
    darkMode: 'class',
    theme: {
        colors: colors,
        configViewer: {
            links: "~/assets/main.css"
        },
        extend: {
            fontFamily: {
                'sans': ['Inter', '-apple-system', ...defaultTheme.fontFamily.sans],
                'display': ['Montserrat', '-apple-system', ...defaultTheme.fontFamily.sans],
                'mono': ['Inconsolata', ...defaultTheme.fontFamily.mono],
            },
        }
    },
    plugins: [
        require('flowbite/plugin'),
        require("@tailwindcss/typography"),
        require('flowbite-typography'),
    ],
}
