<template>
  <p>Me: I got a message from somewhere that I don't know: {{ message }}</p>
</template>

<script>
export default {
  name: "Me",
  inject: ['message']
}
</script>

<style scoped>

</style>