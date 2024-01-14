<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

let store = useStore()
let size={
    'S':'Маленкая',
    'M':'Средняя',
    'XL':'Большая'
}
let sumPrice = computed(() => {
    return (store.state.cart.reduce((sum, item) => sum + (item.product.price[item.product.size] * item.product.count), 0) + store.state.cart.reduce((acc, obj) => acc + obj.souses.reduce((s, src) => s + src.price, 0), 0))
})
</script>

<template>
<div class="compound d-flex flex-column">
    <div class="flex-grow-1">
        <h5 class="sostZakaz text-start mb-4">Состов заказа</h5>
        <div class="d-flex flex-column gap-4">
            <div class="item d-flex align-items-center justify-content-between"  v-for="cartProduct in store.state.cart">
                <div class="d-flex flex-column">
                    <h5 class="mb-0 text-start title ">{{ cartProduct.product.title }} за {{cartProduct.product.price[cartProduct.product.size]}} ₴</h5>
                    <span class="text-start desc">{{size[cartProduct.product.size] }}</span>
                </div>
                <span class="price">599₽</span>
            </div>
        </div>
    </div>
    <div class="text-start d-flex justify-content-between">
        <span class="sum">Сумма заказа</span>
        <span class="priceD" :class="{disc:store.state.discount<1}">{{sumPrice}} ₴</span>
        <span class="priceD" v-if="store.state.discount<1">{{sumPrice * store.state.discount}}₴</span>
    </div>
</div>
</template>

<style scoped>
.disc{
    text-decoration: line-through;
    font-weight: 500 !important;
}
.priceD{
    color: #231F20;
    font-size: 17px;
    font-weight: 800;
}
.sum{
    color: rgba(35, 31, 32, 0.60);
    font-size: 16px;
    font-weight: 600;
}
.desc{
    color: rgba(35, 31, 32, 0.80);
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    opacity: 0.6;
}
.price{
    color: #231F20;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
}
.title{
    color: rgba(35, 31, 32, 0.80);
    font-size: 16px;
    font-weight: 600;
}
.compound{
    width: 100%;
    padding: 22px;
    background: #FFF;
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.08);
}
.sostZakaz{
    color: #F7D22D;
    font-size: 16px;
    font-weight: 800;
    line-height: 28px; /* 175% */
}
@media (min-width: 768px) {
    .compound{
        width: 337px;
    }
}
</style>