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
        </div>
    </nav>
</template>

<script>
import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'
export default {
    components: { Avatar },
    setup() {
        const { user, isLogin, signOut, signIn } = useAuth()
        return { user, isLogin, signOut, signIn }
    },
}
</script>
