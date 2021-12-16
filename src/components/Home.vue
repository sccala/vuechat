<template>
    <Nav />
    <Chat />
</template>

<script>
import Nav from './Nav'
import Chat from './Chat'
export default {
    name: 'Home',
    components: { Chat, Nav },
}
</script>
