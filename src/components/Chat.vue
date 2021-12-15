<template class="bg-primary">
    <div class="container max-w-xl mt-20">
        <div class="mx-5">
            <Message
                v-for="{ id, text, userPhotoURL, userName, userId } in messages"
                :key="id"
                :name="userName"
                :photo-url="userPhotoURL"
                :sender="userId === user?.uid"
                >{{ text }}
            </Message>
        </div>
    </div>
    <div ref="bottom" class="mt-20 mb-60" />
    <div class="fixed bottom-0 bg-tertiary shadow-lg w-full">
        <div class="container max-w-xl">
            <form
                class="w-full flex justify-between"
                v-if="isLogin"
                @submit.prevent="send"
                action=""
            >
                <input
                    v-model="message"
                    placeholder="Enter your message"
                    class="flex-grow m-7 p-4 mr-1 rounded-lg border-none bg-secondary text-primary"
                    required
                />
                <button type="submit">
                    <SendIcon />
                </button>
            </form>
            <p class="text-secondary text-center pt-4 pb-8">
                Vue Realtime Chat by
                <a href="https://github.com/sccala" class="text-gray-300"
                    >Chase Chung</a
                >
            </p>
        </div>
    </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'
import SendIcon from './SendIcon.vue'
import Message from './Message.vue'
export default {
    components: { Message, SendIcon },
    setup() {
        const { user, isLogin } = useAuth()
        const { messages, sendMessage } = useChat()
        const bottom = ref(null)
        watch(
            messages,
            () => {
                nextTick(() => {
                    bottom.value?.scrollIntoView({ behavior: 'smooth' })
                })
            },
            { deep: true }
        )
        const message = ref('')
        const send = () => {
            sendMessage(message.value)
            message.value = ''
        }
        return { user, isLogin, messages, bottom, message, send }
    },
}
</script>
