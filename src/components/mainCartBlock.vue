<script setup>
import MainCartItem from "@/components/mainCartItem.vue";
import {useStore} from "vuex";
import SousTextRep from "@/components/sousTextRep.vue";
let store = useStore()
function deleteInCart(data){
    store.dispatch('deleteItemInCart', data)
}
</script>

<template>
<div>
    <h1 v-if="store.state.cart.length>0" class="cartText text-start">Корзина</h1>
    <h1 v-if="store.state.cart.length===0" class="cartText text-start">Корзина пуста</h1>
    <div v-for="product in store.state.cart">
        <main-cart-item @delete="deleteInCart" :product="product.product"></main-cart-item>
        <sous-text-rep class="sous" v-for="sous in product.souses" :sous="sous" @delSouse="(data)=>$emit('delSouse', {data:data, item:product})"></sous-text-rep>
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