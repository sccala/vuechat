<template>
    <Nav />
    <router-link to="/"></router-link>
    <router-view />
</template>

<script>
import Nav from './components/Nav.vue'
import { onBeforeMount } from 'vue'
import firebase from 'firebase'
import { useRouter, useRoute } from 'vue-router'
export default {
    components: { Nav },
    setup() {
        const router = useRouter()
        const route = useRoute()

        onBeforeMount(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (!user) {
                    router.replace('./login')
                } else if (
                    route.path == '/login' ||
                    route.path == '/register'
                ) {
                    router.replace('/')
                }
            })
        })
    },
}
</script>
