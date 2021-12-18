// @ts-nocheck
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import Filter from 'bad-words'
import { ref, onUnmounted, computed } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.VUE_APP_API,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_APPID,
    measurementId: process.env.VUE_APP_MEASUREMENTID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = firebase.auth()

export function useAuth() {
    const user = ref(null)
    const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user))
    onUnmounted(unsubscribe)
    const isLogin = computed(() => user.value !== null)

    const signIn = async () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(googleProvider)
    }
    const signOut = () => auth.signOut()

    return { user, isLogin, signIn, signOut }
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)
const filter = new Filter()

export function useChat() {
    const messages = ref([])
    const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
        messages.value = snapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .reverse()
    })
    onUnmounted(unsubscribe)

    const { user, isLogin } = useAuth()
    const sendMessage = (text) => {
        if (!isLogin.value) return
        const { photoURL, uid, displayName } = user.value
        messagesCollection.add({
            userName: displayName,
            userId: uid,
            userPhotoURL: photoURL,
            text: filter.clean(text),
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return { messages, sendMessage }
}

//admin

// const functions = require('firebase-functions')
// const admin = require('firebase-admin')

// admin.initializeApp({
//     databaseURL: 'YOUR_DATABASE_URL',
// })

//add admin role
// export function addAdminClaim() =
//     .document('admin_users/{docID}')
//     .onCreate((snap) => {
//         const newAdminUser = snap.data()
//         if (newAdminUser === undefined) {
//             return
//         }
//         modifyAdmin(newAdminUser.uid, true)

//     })

//remove admin role
// export function removeAdminClaim() {

//     .document('admin_users/{docID}')
//     .onDelete((snap) => {
//         const deletedAdminUser = snap.data()
//         if (deletedAdminUser === undefined) {
//             return
//         }
//         modifyAdmin(deletedAdminUser.uid, false)

//     })
// const modifyAdmin = (uid, isAdmin) => {
//     admin.auth().setCustomUserClaims(uid, { admin: isAdmin }).then()}
// }
