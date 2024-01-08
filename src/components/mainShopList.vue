<script setup>
let props=defineProps({
    products: Array
})

import ShopItem from "@/components/shopItem.vue";
</script>

<template>

    <div class="block">
        <h1 class="title text-start">Товары</h1>
        <div class="cont">
            <shop-item @addToCart="$emit('addToCart', product)" v-for="product in products" :key="product.id" :product="product"></shop-item>
        </div>
    </div>
</template>

<style scoped>
.block{
    margin-top: 11px;
}
.title{
    color: #F7D22D;
    font-size: 21px;
    font-weight: 800;
}
.cont{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 21px;
}
@media(min-width: 768px){
    .cont{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    row-gap: 30px;
    column-gap: 31px;
}
@media(min-width: 1110px){
    .cont{
        grid-template-columns: repeat(4, 1fr);
    }
    row-gap: 49px;
    column-gap: 31px;
}
</style>