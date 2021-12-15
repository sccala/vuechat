<template class="bg-primary h-screen mt-0">
    <Nav />
    <Chat />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Chat from '@/components/Chat.vue'

export default {
    name: 'App',
    components: { Nav, Chat },
}
</script>
