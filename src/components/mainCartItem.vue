<script setup>
import {useStore} from "vuex";

let store = useStore()
let props = defineProps({
    product: Object
})
function addCount(){
    store.dispatch('addCountInItemCart', props.product)
}
function removeCount() {
    store.dispatch('removeCountInItemCart', props.product)
}
</script>

<template>
<div class="item">
    <img class="mainImg" :src="product.image" src="@/assets/images/pizza.png">
    <div class="counter d-flex align-items-center justify-content-between">
        <button class="noneBtn" @click="removeCount">-</button>
        <span>{{ product.count}}</span>
        <button class="noneBtn" @click="addCount">+</button>
    </div>
    <button @click="$emit('delete', product)" class="closeBtn noneBtn"><img class="closeImg" src="@/assets/images/DeleteCart.png"></button>
    <div class="blockTitle d-flex flex-column">
        <span class="title text-start">{{product.title}}</span>
        <span class="description text-start">{{product.description}}</span>
    </div>
    <span class="price">{{product.price}} ₽</span>
</div>
</template>

<style scoped>
.item{
    display: grid;
    grid-template-areas:
    "img counter closeImg"
    "title title title";
    row-gap: 8px;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #ECECF1;

}
.price{
    display: none;
    grid-area: price;
    color: #F7D22D;
    font-size: 24px;
    font-weight: 800;
}
.item:last-child{
    border-bottom: 1px solid #ECECF1;
}
.description{
    color: #686466;
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
}
.title{
    font-size: 18px;
    font-weight: 700;
}
.blockTitle{
    grid-area: title;
}
.closeBtn{
    justify-self: end;
    grid-area: closeImg;
}
.closeImg{
    height: 27px;
    width: 27px;
}
.mainImg{
    grid-area: img;
    width: 71px;
    height: 71px;
}
.counter{
    margin-left: 98px;
    justify-self: end;
    grid-area: counter;
    width: 93px;
    height: 32px;
    border-radius: 8px;
    background: #F3F3F7;
    padding: 0 15px;
}
.counter *{
    color: #696F7A;
    font-size: 16px;
    font-weight: 600;
}
@media(min-width: 768px){
    .closeBtn{
        justify-self: stretch;
    }
    .counter{
        margin-left: 0;
    }
    .price{
        display: block;
    }
    .item{
        column-gap: 25px;
        grid-template-areas:
        "img title price counter closeImg";
        grid-template-columns: auto 1fr;
    }
}
</style>