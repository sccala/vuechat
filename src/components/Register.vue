<template>
    <div class="pt-28 w-full">
        <div
            class="bg-gray-200 shadow-md rounded-lg min-w-sm max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-tertiary mx-auto"
        >
            <form class="space-y-6" @submit.prevent="registerUser">
                <h3 class="text-xl font-medium text-primary">
                    Register user account
                </h3>
                <div v-if="error" class="text-red-700">
                    {{ error.message }}
                </div>
                <div>
                    <label
                        for="userName"
                        class="text-sm font-medium text-primary block mb-2"
                        >Name</label
                    >
                    <input
                        type="text"
                        name="userName"
                        v-model="userName"
                        class="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-500 dark:placeholder-gray-400"
                        placeholder="Your Name"
                        required=""
                    />
                </div>
                <div>
                    <label
                        for="email"
                        class="text-sm font-medium text-primary block mb-2"
                        >Your email</label
                    >
                    <input
                        type="email"
                        name="email"
                        v-model="email"
                        class="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-500 dark:placeholder-gray-400"
                        placeholder="name@company.com"
                        required=""
                    />
                </div>
                <div>
                    <label
                        for="password"
                        class="text-sm font-medium text-primary block mb-2"
                        >Your password</label
                    >
                    <input
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-secondary dark:border-gray-500 dark:placeholder-gray-400"
                        required=""
                    />
                </div>
                <button
                    type="submit"
                    class="w-full text-gray-100 bg-accent hover:bg-green-600 focus:ring-4 focus:green-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:hover:bg-red-700"
                >
                    Register
                </button>
                <button
                    type="submit"
                    class="w-full text-gray-100 bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:hover:bg-red-700 mb-8"
                    @click="signIn"
                >
                    Register with Google
                </button>
                <div class="text-sm font-medium text-secondary">
                    You have an account?

                    <router-link to="/login" class="text-accent hover:underline"
                        >Login</router-link
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import { useAuth } from '@/firebase'
import 'firebase/auth'
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            userName: '',
            password: '',
            error: '',
        }
    },
    methods: {
        registerUser() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)

                .then(() => {
                    console.log('here')
                    this.$router.replace({ name: 'admin' })
                })
                .catch((error) => (this.error = error))
        },
    },
    setup() {
        const { user, isLogin, signOut, signIn } = useAuth()
        return { user, isLogin, signOut, signIn }
    },
}
</script>
