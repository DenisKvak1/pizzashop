<script setup>

const props=defineProps({
    product: Object
})
</script>

<template>
<button class="noneBtn myCard d-flex align-items-center" @click="$emit('addToCart', product)">
    <img :src="product.image" alt="">
    <div class="d-flex flex-column">
        <span class="title">{{product.title}}</span>
        <span class="text-start price">от {{product.price}} &#8381;</span>
    </div>
</button>
</template>

<style scoped>
.title{
    color: #000;
    font-size: 14px;
    font-weight: 700;
    line-height: 0.8;
}
.price{
    color: #F7D22D;
    font-size: 13px;
    font-weight: 800;
}
.myCard img{
    height: 56px;
    width: auto;
    margin-right: 14px;
}
.myCard{
    width: 200px;
    height: 78px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.06);
    padding: 11px 14px;
}
@media (min-width: 1100px){
    .myCard{
        width: 255px;
        height: 99px;
    }
    .myCard img{
        height: 71px;
        width: auto;
        margin-right: 14px;
    }
    .title{
        font-size: 18px;
    }
    .price{
        font-size: 16px;
    }
}
</style>