<template>
    <div>
        <input
            @change="toggleTheme"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox"
        />

        <label for="checkbox" class="switch-label">
            {{ userTheme === 'dark' ? '🌙' : '☀️' }}
            <div
                class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark' }"
            ></div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'ThemeButton',
    mounted() {
        const initUserTheme = this.getMediaPreference()
        this.setTheme(initUserTheme)
    },

    data() {
        return {
            userTheme: 'light',
        }
    },

    methods: {
        toggleTheme() {
            const activeTheme = localStorage.getItem('user-theme')
            if (activeTheme === 'light') {
                this.setTheme('dark')
            } else {
                this.setTheme('light')
            }
        },

        setTheme(theme) {
            localStorage.setItem('user-theme', theme)
            this.userTheme = theme
            document.documentElement.className = theme
        },

        getMediaPreference() {
            const hasDarkPreference = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
            if (hasDarkPreference) {
                return 'dark'
            } else {
                return 'light'
            }
        },
    },
}
</script>
