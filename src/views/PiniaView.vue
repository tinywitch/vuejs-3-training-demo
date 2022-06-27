<template>
  <div class="about">
    <h1>This is Pinia example page</h1>
    <p></p>

    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>

    <form @submit.prevent="buy">
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="cart.removeItem(item.name)" type="button">X</button>
        </li>
      </ul>

      <p></p>

      <button>Buy</button>
      <button
          :disabled="!cart.items.length"
          @click="clearCart"
          type="button"
          data-testid="clear"
      >Clear the cart</button>
    </form>
  </div>
</template>

<script >
import {useCartStore} from "../stores/cart";
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const cart = useCartStore()

    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return

      cart.addItem(itemName.value)
      itemName.value = ''
    }

    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        cart.rawItems = []
      }
    }

    async function buy() {
      const n = await cart.purchaseItems()

      alert(`You bought ${n} items, here you are`)

      cart.rawItems = []
    }

    // @ts-ignore
    window.stores = { cart }

    return {
      itemName,
      addItemToCart,
      cart,
      buy,
      clearCart,
    }
  },
})
</script>

<style>
li {
  margin: 1rem 0
}
</style>