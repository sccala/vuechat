<template >
  <img class= "h-8 w-8 rounded-full shadow-sm " :src="src" />
</template>

<script>
export default {
  props: { src: { type: String, default: '' } }
}
</script>
