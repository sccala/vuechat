<template>
    <nav class="fixed w-full bg-gray-800 shadow-lg top-0 z-20">
        <div
            class="container max-w-xl flex content-center items-center justify-between h-16 px-4"
        >
            <h1 class="text-red-300 text-xl"><strong>Vue</strong> Chat App</h1>
            <div v-if="isLogin" class="right-0 flex ml-auto">
                <Avatar :src="user.photoURL" />
                <button
                    class="text-gray-400 hover:text-white p-1 rounded px-4"
                    @click="signOut"
                >
                    Sign Out
                </button>
            </div>

            <button
                v-else
                class="bg-green-500 hover:bg-green-600 text-white"
                @click="signIn"
            >
                Sign in
            </button>
            <theme-button />
        </div>

        <!-- <button
            className="items-center py-1 px-1 mx-2 text-primary rounded-full text-base mt-4 sm:mt-0"
            @click="
                {
                    ;(isDark) => setIsDark((prevState) => !prevState)
                }
            "
        >
      
            theme===dark ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 items-center"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
            ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 "
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
            </svg>
            )}"
        </button> -->
    </nav>
</template>

<script>
import Avatar from './Avatar.vue'
import ThemeButton from '@/components/ThemeButton.vue'
import { useAuth } from '@/firebase'
export default {
    name: 'Nav',
    components: { Avatar, ThemeButton },
    setup() {
        const { user, isLogin, signOut, signIn } = useAuth()
        return { user, isLogin, signOut, signIn }
    },
}
</script>
