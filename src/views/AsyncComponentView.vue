<template>
  <div class="about">
    <h1>This is an Async Component page</h1>
    <ATonOfCorn></ATonOfCorn>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  components: {
    ATonOfCorn: defineAsyncComponent({
      loader: () => import('../components/async_components/ATonOfCorn.vue'),
    })
  }
}
</script>