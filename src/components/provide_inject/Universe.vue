<template>
  <Earth></Earth>
</template>

<script>
import Earth from "./Earth.vue";

export default {
  name: "Universe",
  components: {Earth},
  provide() {
    return {
      message: "don't listen to me, just do it"
    }
  }
}
</script>

<style scoped>

</style>