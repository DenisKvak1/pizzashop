<script setup>
import {useStore} from "vuex";

let props = defineProps({
    product: Object
})
let store= useStore()
function addCount(){
    store.dispatch('addCountInItemCart', props.product)
}
function removeCount() {
    store.dispatch('removeCountInItemCart', props.product)
}
</script>

<template>
<div class="d-flex flex-column ">
    <div class="d-flex align-items-center item">
        <img class="imgMain me-auto" :src="product.image">
        <div class="d-flex flex-column justify-content-between h-100 mt-1 block2">
            <span class="title text-start">{{product.title}}</span>
            <div class="counter mt-auto d-flex align-items-center justify-content-between">
                <button class="noneBtn" @click="removeCount">-</button>
                <span>{{ product.count}}</span>
                <button class="noneBtn" @click="addCount">+</button>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-between h-100 mt-1 ">
            <button @click="$emit('delete', product)" class="noneBtn align-self-end"><img class="closeImg" src="@/assets/images/DeleteCart.png"></button>
            <span class="price">{{product.price}} ₽</span>
        </div>
    </div>
    <div class="line"></div>
</div>
</template>

<style scoped>
.price{
    flex-shrink: 0;
    color: #F7D22D;
    font-size: 20px;
    font-weight: 700;
}
.line{
    margin-left: auto;
    margin-right: auto;
    width: 260px;
    height: 1px;
    border-radius: 10px;
    background: #ECECF1;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.06);
}
.block2{
    width: 120px;
}
.counter{
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
.title{
    font-size: 13px;
    font-weight: 700;
}
.item{
    min-width: 300px;
    max-width: 400px;
    height: 125px;
    padding: 24px 15px;
}
.closeImg{
    height: 20px;
    width: 20px;
}
.imgMain{
    height: 100%;
}

</style>