<script setup>

import MainHeader from "@/components/mainHeader.vue";
import StatusZakazBar from "@/components/statusZakazBar.vue";
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import HeaderWithStatusBar from "@/components/headerWithStatusBar.vue";
import MainCartBlock from "@/components/mainCartBlock.vue";
import {useStore} from "vuex";
import addonArray from "@/helper/addonArray.js";
import NewItemSlider from "@/components/newItemSlider.vue";
import InputPromo from "@/components/inputPromo.vue";
import ClassicButton from "@/UI/classicButton.vue";
import router from "@/router/router.js";
import MainFooter from "@/components/mainFooter.vue";
import AuthModal from "@/components/authModal.vue";
import {loadUserDate} from "@/hooks/localStorageHook.js";
import {saveLoadLocalStorage} from "@/hooks/loadAccountData.js";
let store = useStore()
loadUserDate(store)
saveLoadLocalStorage(store)

let width = ref(window.innerWidth)
let authDialogVisible=ref(false)
const handleResize = () => {
    width.value = window.innerWidth;
};
onMounted(() => {
    window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
watch(() => window.innerWidth, () => {
    width.value = window.innerWidth;
});
function Addon(data){
    let tempObject = {product: data,souses: []}
    tempObject.product.size='M'
    tempObject.product.count=1
    store.dispatch('pushItemInCart', tempObject)
}
let sumPrice = computed(()=>{
    return (store.state.cart.reduce((sum, item) => sum + (item.product.price[item.product.size] * item.product.count), 0) + store.state.cart.reduce((acc, obj) => acc + obj.souses.reduce((s, src) => s + src.price, 0), 0) )* store.state.discount
})
</script>

<template>
    <main-header v-if="width<768" @openAuth="authDialogVisible = true" class="hc"></main-header>
    <div class="myContainer d-flex flex-column">
            <header-with-status-bar class="hc" v-if="width>=768" ></header-with-status-bar>
            <div class="flex-grow-1">
                <status-zakaz-bar :statusNumber="1" v-if="width<768" class="statusBar"></status-zakaz-bar>
                <main-cart-block class="mainCartBlock"></main-cart-block>
                <new-item-slider v-if="store.state.cart.length>0 && addonArray(store.state.cart).length>0" class="slider" @addToCart="Addon" :products="addonArray(store.state.cart)"></new-item-slider>
                <h3 class="promoText text-start" v-if="store.state.cart.length>0">Промокод</h3>
                <div v-if="store.state.cart.length>0" class="pricePromoBlock">
                    <div class="promoBlock" >
                        <input-promo></input-promo>
                    </div>
                    <div >
                        <h3 class="priceText text-start">Сумма заказа: <span class="priceText2 ms-3">{{sumPrice}} ₴</span></h3>
                    </div>
                </div>
                <div class="BackOform">
                    <classic-button class="mt-4 oform" v-if="store.state.cart.length>0" @click="router.push('/delivery')">Оформить заказ</classic-button>
                    <button class="noneBtn mt-3 d-flex align-items-center justify-content-center gap-2 ms-auto me-auto backButton" @click="router.push('./')"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="#696F7A"/>
                    </svg>Вернуться в магазин</button>
                </div>
            </div>
            <main-footer></main-footer>
        </div>
        <auth-modal v-if="authDialogVisible" @close="authDialogVisible = false" :show="authDialogVisible"></auth-modal>
</template>

<style scoped>

.oform{
    grid-area: oform;
}
.backButton{
    color: #696F7A;
    font-size: 15px;
    font-weight: 700;
    grid-area: backBtn;
}
.priceText2{
    color: #F7D22D;
    font-size: 26px;
    font-weight: 800;
}
.priceText{
    font-size: 21px;
    font-weight: 600;
}
.promoText{
    color: #FF2E65;
    font-size: 20px;
    margin-bottom: 23px;
    font-weight: 600;

}
.statusBar{
    display: flex;
    justify-content: center;
}
.hc {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
}
.myContainer {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
    min-height: 100vh;
}
.mainCartBlock{
    margin-top: 30px;
}

@media(min-width: 768px){
    .oform{
        margin-top: 0 !important;
    }
    .promoBlock{
        margin-top: 0px;
    }
    .promoText{
        margin-top: 30px;
    }
    .pricePromoBlock{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .BackOform{
        margin-top: 42px;
        display: grid;
        grid-template-areas:
            "backBtn oform";
        justify-content: space-between;
        align-items: center;
    }
    .backButton{
        margin: 0 !important;
    }
}
</style>