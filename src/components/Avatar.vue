<template>
    <img
        class="h-8 w-8 rounded-full shadow-sm"
        :src="src || 'https://source.unsplash.com/random'"
    />
</template>

<script>
export default {
    props: { src: { type: String, default: '' } },
}
</script>
