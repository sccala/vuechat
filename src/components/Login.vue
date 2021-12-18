<template>
    <div class="grid justify-items-stretch pt-28">
        <div
            class="bg-gray-100 shadow-md rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-tertiary justify-self-center"
        >
            <form class="space-y-6" @submit.prevent="pressed">
                <h3 class="text-xl font-medium text-primary">
                    Log in to start chatting
                </h3>
                <div v-if="error" class="text-red-700">{{ error.message }}</div>
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
                        placeholder="••••••••"
                        v-model="password"
                        class="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-secondary dark:border-gray-500 dark:placeholder-gray-400"
                        required=""
                    />
                </div>
                <!-- <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-green-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                                required=""
                            />
                        </div>
                        <div class="text-sm ml-3">
                            <label
                                for="remember"
                                class="font-medium text-primary"
                                >Remember me</label
                            >
                        </div>
                    </div>
                    <a
                        href="#"
                        class="text-sm text-accent hover:underline ml-auto"
                        >Lost Password?</a
                    >
                </div> -->
                <button
                    type="submit"
                    class="w-full text-gray-100 bg-accent hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:hover:bg-green-700"
                    @click="pressed"
                >
                    Login to your account
                </button>
                <button
                    type="submit"
                    class="w-full text-gray-100 bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:hover:bg-red-700"
                    @click="signIn"
                >
                    Login with Google
                </button>
                <div class="text-sm font-medium text-secondary">
                    Not registered?

                    <router-link
                        to="/register"
                        class="text-accent hover:underline"
                        >Register Account</router-link
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useAuth } from '@/firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
        pressed() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
            // .then((data) => {
            //     console.log(data)
            //     this.$router.replace({ name: 'secret' })
            // })
            this.$router.push('/').catch((error) => {
                this.error = error
            })
        },
    },
    setup() {
        const { user, isLogin, signOut, signIn } = useAuth()
        return { user, isLogin, signOut, signIn }
    },
}
</script>
