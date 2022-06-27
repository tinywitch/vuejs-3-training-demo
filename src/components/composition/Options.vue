<script>
export default {
    data() {
        return {
            cartCount: 0,
            wishlistCount: 0
        }
    },

    methods: {
        addToCart() {
            this.cartCount++
        },

        addToWishlist() {
            this.wishlistCount++
        }
    },

    mounted() {
        console.log("This is when the options component is mounted completely")
    }
}
</script>

<template>
    <h4>Products quantity in cart {{ cartCount }}</h4>
    <button @click="addToCart">Add to cart</button>

    <p></p>

    <h4>Products quantity in wishlist {{ wishlistCount }}</h4>
    <button @click="addToWishlist">Add to wishlist</button>

</template>