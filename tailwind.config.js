const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                body: ['Cabin', 'sans-serif'],
                heading: ['Cabin', 'sans-serif'],
            },
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
                accent: 'var(--color-bg-accent)',
                tertiary: 'var(--color-bg-tertiary)',
            },
            textColor: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                accent: 'var(--color-text-accent)',
                tertiary: 'var(--color-text-tertiary)',
            },
            container: {
                center: true,
                padding: {
                    default: '0.5rem',
                    sm: '1rem',
                    lg: '4rem',
                    xl: '5rem',
                },
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.coolGray,
            blue: colors.sky,
            red: colors.rose,
            pink: colors.fuchsia,
            indigo: colors.indigo,
            white: colors.white,
        },
    },
    variants: {
        extend: {
            backgroundImage: ['dark'],
            dropShadow: ['hover', 'focus'],
        },
    },
    plugins: [],
}
