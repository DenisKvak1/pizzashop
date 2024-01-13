<script setup>
import ClassicButton from "@/UI/classicButton.vue";

const props= defineProps({
    product: Object
})
</script>

<template>
    <div class="myCard ">
        <img :src="product.image" alt="">
        <span class="price text-start">от {{product.price}} ₴</span>
        <div class="block d-flex flex-column">
            <span class="title text-start">{{product.title}}</span>
            <span class="description text-start" >{{product.description}}</span>
        </div>
        <classic-button class="cart" @click="$emit('addToCart', product)">В корзину</classic-button>
    </div>
</template>

<style scoped>
.description{
    width: 186px;
    color: #686466;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px; /* 144.444% */
}
.title{
    color: #797979;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px; /* 200% */
}
.myCard{
    display: grid;
    grid-template-areas:
    "img block"
    "price cart";
    row-gap: 5px;
    align-items: center;
}
.cart{
    grid-area: cart;
}
.price{
    margin-left: 7px;
    grid-area: price;
    color: #231F20;
    font-size: 22px;
    font-weight: 700;
    line-height: 19px; /* 86.364% */
}
.block{

    grid-area: block;
}
img{
    width: 103px;
    height: 103px;
    grid-area: img;
}
@media (min-width: 1110px){
    .title{
        font-size: 24px;
        font-weight: 800;
        line-height: 28px;
    }
    .myCard{
        width: 254px;
        grid-template-areas:
        "img img"
        "block block"
        "price cart";
        row-gap: 0;
    }
    .description{
        margin-top: 14px;
        width: 254px;
        font-size: 13px;
        font-weight: 500;
        line-height: 19px;
    }
    img{
        width: 253px;
        height: 253px;
    }
    .price{
        margin: 25px 0 0;
    }
    .cart{
        margin-top: 25px;
    }
}
</style>