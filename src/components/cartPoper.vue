<script setup>
import {useStore} from "vuex";
import SwiperInCart from "@/components/swiperInCart.vue";
import {ref} from "vue";
import NewItemSlider from "@/components/newItemSlider.vue";
import addonArray from "@/helper/addonArray.js";

let store= useStore()
let props= defineProps({
    placement: String
})
let show = ref()
function deleteInCart(data){
    store.dispatch('deleteItemInCart', data)
}
function deleteSousInCart(Args){
    let tempCart = JSON.parse(JSON.stringify(store.state.cart))
    let index = store.state.cart.findIndex((element)=>element.product.id === Args['item'].product.id)
    let temp = store.state.cart[index].souses.filter((element)=>element.id !== Args['data'].id)
    tempCart[index].souses=temp
    store.commit('setCart', tempCart)
}
function openS(){
    show.value=true
}
function closeS(){
    setTimeout(()=>show.value=false, 350)
}
function Addon(data){
    let tempObject = {product: data,souses: [], size: 'M'}
    tempObject.product.count=1
    store.dispatch('pushItemInCart', tempObject)
}
</script>

<template>
    <popper
        :placement="placement"
        :offsetDistance="26"
        class="popperMain"
        @open:popper="openS"
        @close:popper="closeS"
    >
        <template #content>
            <div class="wrap">
                <div class="popper">
                    <span v-if="store.state.cart.length===0" class="net">Корзина пуста</span>
                    <swiper-in-cart :show="show" @delSouse="deleteSousInCart" @delete="deleteInCart"></swiper-in-cart>
                    <div v-if="store.state.cart.length>0" class="price d-flex justify-content-between align-items-center">
                        <span class="st">Сумма заказа</span>
                        <span class="sumPrice">{{store.state.cart.reduce((sum, item) => sum + (item.product.price * item.product.count), 0) + store.state.cart.reduce((acc, obj) => acc + obj.souses.reduce((s, src) => s + src.price, 0), 0)}} ₽</span>
                    </div>
                    <div v-if="store.state.cart.length>0" class="addD d-flex justify-content-between align-items-center">
                        <span class="add ">Добавить к заказу?</span>
                        <span></span>
                    </div>

                    <new-item-slider v-if="store.state.cart.length>0" class="slider" @addToCart="Addon" :products="addonArray(store.state.products)"></new-item-slider>
                </div>
            </div>
        </template>
        <slot></slot>
    </popper>
</template>

<style scoped>
.addD{
    margin-left: 15px;
}
.add{
    color: #FF2E65;
    font-size: 14px;
}
.slider{
    margin-left: 11px;
    width: 300px;
}
.st, .sumPrice{
    line-height: 0.9;
}
.sumPrice{
    color: #F7D22D;
    font-size: 22px;
    font-weight: 800;
}
.price{
    padding: 20px 15px;
}
.net{
    width: 185px;
    display: block;
    padding: 10px 30px;
}
.wrap {
    margin-right: 10px;
    position: static;
}
@media (min-width: 768px) {
    .wrap{
        margin-right: 20px;
    }
}
.popper {
    background-color: white;
    border-radius: 10px;
    border: 3.5px solid rgba(247, 210, 45, 0.40);
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.08);
}
</style>
