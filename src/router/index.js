// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase/app'
import 'firebase/auth'

import App from '../'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: App,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const isAuthenticated = firebase.auth().currentUser
    console.log('isauthenticated', isAuthenticated)
    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
