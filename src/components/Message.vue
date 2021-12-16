<template>
    <div class="my-2 w-full">
        <div class="flex justify-between">
            <span
                class="text-xs text-primary"
                :class="sender ? 'ml-24' : 'ml-11'"
                >{{ name }}</span
            >
            <span
                class="place-items-end text-xs text-primary"
                :class="sender ? 'mr-11' : 'mr-24'"
                >{{ createdAt.toDate().toLocaleString() }}</span
            >
        </div>
        <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
            <Avatar
                class="mt-1"
                :src="photoUrl || 'https://source.unsplash.com/random'"
            />
            <div
                class="mx-2 p-4 rounded-lg shadow-md w-3/4 text-primary"
                :class="
                    sender ? 'bg-gray-100 dark:bg-gray-500 ' : 'bg-secondary'
                "
            >
                <!-- ??? -->
                <slot />
                <!-- ??? -->
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
        createdAt: { type: Number },
    },
}
</script>
