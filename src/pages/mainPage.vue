<script setup>
import 'swiper/css';
import MainHeader from "@/components/mainHeader.vue";
import { onMounted,  ref, watch} from "vue";
import BannerSlider from "@/components/bannerSlider.vue";
import NewsBlock from "@/components/newsBlock.vue";
import MainShopList from "@/components/mainShopList.vue";
import AddToCartModal from "@/components/addToCartModal.vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import ClassicButton from "@/UI/classicButton.vue";
import CartPoper from "@/components/cartPoper.vue";

let store=useStore()
const route = useRoute()

let banners= ref([{id:1,image:'src/assets/images/Banner1.png'},{id:2,image:'src/assets/images/Banner2.png'},{id:3,image:'src/assets/images/Banner3.png'}])
let productForAddToCart= ref({})
let dialogVisible=ref(false)
function showDialog(data){
    productForAddToCart.value = data
    dialogVisible.value = true
}
function hideDialog(){
    productForAddToCart.value = {}
    dialogVisible.value = false
}

let type= route.params.type ? route.params.type : 'pizza'
onMounted(()=>{
    store.dispatch('loadDataApi', type)
})
watch(() => route.params.type, (newType, oldType) => {
    type = newType ? newType : 'pizza';
    store.dispatch('loadDataApi', type);
});
</script>

<template>
    <main-header class="hc"></main-header>
    <div class="myContainer">
        <banner-slider :banners="banners"></banner-slider>
        <news-block v-if="$store.state.products" @addToCart="showDialog" :products="$store.state.products"></news-block>
        <main-shop-list @addToCart="showDialog" :products="$store.state.products"></main-shop-list>

        <add-to-cart-modal v-if="dialogVisible" :show="dialogVisible" @close="hideDialog" :product="productForAddToCart"></add-to-cart-modal>
        <cart-poper v-if="$store.state.cart.length >0" class="cart" :placement="'top'">
            <classic-button>Корзина</classic-button>
        </cart-poper>
    </div>
</template>

<style scoped>
@media(min-width: 768px){
    .cart{
        display: none !important;
    }
}
.cart{
    position: fixed;
    top: 541px;
    right: 11px;
    z-index: 2500;
}
.hc {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
}

.myContainer {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;

}

@media (min-width: 768px) {
    .myContainer {
        padding: 0px 20px;
    }
}
</style>