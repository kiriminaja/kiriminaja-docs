module.exports = {
    corePlugins: {
        preflight: false, // disable Tailwind's reset
    },
    darkMode: ['class', '[data-theme="dark"]'],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('flowbite/plugin')
    ],
};
