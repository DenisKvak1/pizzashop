<script setup>

import router from "@/router/router.js";
import HeaderWithStatusBar from "@/components/headerWithStatusBar.vue";
import StatusZakazBar from "@/components/statusZakazBar.vue";
import MainFooter from "@/components/mainFooter.vue";
import MainHeader from "@/components/mainHeader.vue";
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import DeliveryBlock from "@/components/deliveryBlock.vue";
import {useStore} from "vuex";
import {loadUserDate} from "@/hooks/localStorageHook.js";
import AuthModal from "@/components/authModal.vue";
import InputPromo from "@/components/inputPromo.vue";
import {saveLoadLocalStorage} from "@/hooks/loadAccountData.js";
import ClassicButton from "@/UI/classicButton.vue";
import CompoundOrderDelivery from "@/components/compoundOrderDelivery.vue";
import {clearanceOfProductApi} from "@/API/clearanceOfProduct.js";

let width = ref(window.innerWidth)
let store = useStore()
loadUserDate(store)
saveLoadLocalStorage(store)
let authDialogVisible = ref(false)
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
let sumPrice = computed(() => {
    return (store.state.cart.reduce((sum, item) => sum + (item.product.price[item.product.size] * item.product.count), 0) + store.state.cart.reduce((acc, obj) => acc + obj.souses.reduce((s, src) => s + src.price, 0), 0)) * store.state.discount
})
let mainDate = ref()
function areAllFieldsFilled(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] === '' || obj[key] === undefined || obj[key] === null)) {
            return false;
        }
    }
    return true;
}
async function clearanceOfProduct(mainData){
    if(areAllFieldsFilled(mainData) && store.state.cart.length>0){
        mainData.cart = store.state.cart
        mainData.promo = store.state.promo
        let responce = await clearanceOfProductApi(mainData)
        if(responce.success){
            store.commit('setCart', [])
            localStorage.removeItem("cart")
            router.push('/')
        }
    }
}

</script>

<template>
    <main-header @openAuth="authDialogVisible = true" v-if="width<768" class="hc"></main-header>
    <div  class="myContainer d-flex flex-column">
        <header-with-status-bar class="hc" v-if="width>=768"></header-with-status-bar>
        <div class="flex-grow-1" >
            <div v-if="store.state.cart.length>0">
                <status-zakaz-bar :statusNumber="2" v-if="width<768" class="statusBar"></status-zakaz-bar>
                <div class="mainBlock mt-4">
                    <div>
                        <delivery-block @updateDate="(data)=>mainDate = data"></delivery-block>
                        <input-promo class="mt-3"></input-promo>

                    </div>
                    <compound-order-delivery></compound-order-delivery>
                </div>
                <h3 class="priceText text-start mt-3 mb-3">Сумма заказа: <span
                    class="priceText2 ms-3">{{ sumPrice }} ₴</span></h3>
                <classic-button class="oform" @click="clearanceOfProduct(mainDate)">Оформить заказ</classic-button>
            </div>
            <button
                class="noneBtn mt-3 d-flex align-items-center justify-content-center gap-2 ms-auto me-auto backButton"
                @click="router.push('/cart')">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z"
                        fill="#696F7A"/>
                </svg>
                Вернуться в корзину
            </button>
        </div>
        <main-footer></main-footer>
    </div>
    <auth-modal v-if="authDialogVisible" @close="authDialogVisible = false" :show="authDialogVisible"></auth-modal>
</template>

<style scoped>

.myContainer {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
    min-height: 100vh;
}

.priceText {
    font-size: 21px;
    font-weight: 600;
}

.priceText2 {
    color: #F7D22D;
    font-size: 26px;
    font-weight: 800;
}

.hc {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
}
@media(min-width: 768px){
    .mainBlock{
        display: flex;
        justify-content: space-between;
    }
    .hc {
        padding: 0px 20px;
    }
}
</style>