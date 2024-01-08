<script setup>
import ClassicButton from "@/UI/classicButton.vue";
import CartItem from "@/components/cartItem.vue";
import {reactive, watch} from "vue";
import {useStore} from "vuex";
import SousTextRep from "@/components/sousTextRep.vue";
let store= useStore()
let props= defineProps({
    placement: String
})
function deleteInCart(data){
    store.dispatch('deleteItemInCart', data)
}
function deleteSousInCart(data, item){
    let tempCart = JSON.parse(JSON.stringify(store.state.cart))
    let index = store.state.cart.findIndex((element)=>element.product.id === item.product.id)
    let temp = store.state.cart[index].souses.filter((element)=>element.id !== data.id)
    tempCart[index].souses=temp
    store.commit('setCart', tempCart)
}
</script>

<template>
    <popper
        :placement="placement"
        :offsetDistance="26"
    >
        <template #content>
            <div class="wrap">
                <div class="popper">
                    <span v-if="store.state.cart.length===0" class="net">Корзина пуста</span>
                    <div  v-for="item in store.state.cart">
                        <cart-item @delete="deleteInCart" :product="item.product" :key="item.product.id"></cart-item>
                        <sous-text-rep class="sous" v-for="sous in item.souses" :sous="sous" @delSouse="(data)=> deleteSousInCart(data, item)"></sous-text-rep>
                    </div>
                    <div v-if="store.state.cart.length>0" class="price d-flex justify-content-between align-items-center">
                        <span class="st">Сумма заказа</span>
                        <span class="sumPrice">{{store.state.cart.reduce((sum, item) => sum + (item.product.price * item.product.count), 0) + store.state.cart.reduce((acc, obj) => acc + obj.souses.reduce((s, src) => s + src.price, 0), 0)}} ₽</span>
                    </div>
                </div>
            </div>
        </template>
        <slot></slot>
    </popper>
</template>

<style scoped>
.sous{
    padding: 5px 15px;
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
