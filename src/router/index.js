// @ts-nocheck
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Dashboard from '../components/Dashboard'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "about" */ '../components/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../components/Register.vue'
            ),
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
//     const isAuthenticated = firebase.auth().currentUser
//     console.log('isauthenticated', isAuthenticated)
//     if (requiresAuth && !isAuthenticated) {
//         next('/login')
//     } else {
//         next()
//     }
// })

export default router
