<template>
    <div class="my-2 w-full">
        <span class="ml-11 text-xs text-primary" v-if="!sender">{{
            name
        }}</span>
        <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
            <Avatar class="mt-1" :src="photoUrl" />
            <div
                class="mx-2 p-4 rounded-lg shadow-md w-3/4 text-primary"
                :class="
                    sender ? 'bg-gray-100 dark:bg-gray-500 ' : 'bg-secondary '
                "
            >
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from './Avatar.vue'
export default {
    components: { Avatar },
    props: {
        name: { type: String, default: '' },
        photoUrl: { type: String, default: '' },
        sender: { type: Boolean, default: false },
    },
}
</script>
