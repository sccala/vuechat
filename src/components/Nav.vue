<template>
    <nav class="fixed w-full bg-accent shadow-lg top-0 z-20">
        <div
            class="container max-w-xl flex content-center items-center justify-between h-16 px-4 py-8"
        >
            <h1 class="text-gray-200 text-xl"><strong>Vue</strong> Chat App</h1>
            <div v-if="isLogin" class="right-0 flex ml-auto">
                <Avatar :src="user.photoURL" />
                <button
                    class="text-gray-200 hover:text-white rounded-full px-4 py-2 border mx-2"
                    @click="signOut"
                >
                    Sign Out
                </button>
            </div>
            <button
                v-else
                class="border text-gray-200 hover:text-gray-300 px-4 py-2 rounded-full"
                @click="signIn"
            >
                Sign in
            </button>
            <ThemeButton />
        </div>
    </nav>
</template>

<script>
import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'
import ThemeButton from './ThemeButton.vue'
export default {
    name: 'Nav',
    components: { Avatar, ThemeButton },
    setup() {
        const { user, isLogin, signOut, signIn } = useAuth()
        return { user, isLogin, signOut, signIn }
    },
}
</script>
