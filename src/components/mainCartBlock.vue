<script setup>
import MainCartItem from "@/components/mainCartItem.vue";
import {useStore} from "vuex";
let store = useStore()
function deleteInCart(data){
    store.dispatch('deleteItemInCart', data)
}
</script>

<template>
<div>
    <h1 v-if="store.state.cart.length>0" class="cartText text-start">Корзина</h1>
    <h1 v-if="store.state.cart.length===0" class="cartText text-start">Корзина пуста</h1>
    <div>
        <main-cart-item @delete="deleteInCart" v-for="product in store.state.cart" :product="product.product"></main-cart-item>
    </div>
</div>
</template>

<style scoped>
.cartText{
    color: #F7D22D;
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 20px;
}
@media (min-width: 768px) {
    .cartText{
        margin-bottom: 33px;
    }
    
}
</style>