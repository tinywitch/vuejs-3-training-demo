<script setup>
import { ref, onMounted } from 'vue'

const cartCount = ref(0)
function addToCart() {
    cartCount.value++;
}


const wishlistCount = ref(0)
function addToWishlist() {
    wishlistCount.value++
}

onMounted(() => {
    console.log("This is when the composition component is mounted completely")
})
</script>

<template>
    <h4>Products quantity in cart {{ cartCount }}</h4>
    <button @click="addToCart">Add to cart</button>

    <p></p>

    <h4>Products quantity in wishlist {{ wishlistCount }}</h4>
    <button @click="addToWishlist">Add to wishlist</button>

</template>