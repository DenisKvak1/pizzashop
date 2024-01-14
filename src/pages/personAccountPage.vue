<script setup>
import MainHeader from "@/components/mainHeader.vue";
import PersonalDataBlock from "@/components/personalDataBlock.vue";
import {useStore} from "vuex";
import {loadUserDate} from "@/hooks/localStorageHook.js";
import {onMounted, ref} from "vue";
import AuthModal from "@/components/authModal.vue";
import router from "@/router/router.js";
import {deleteCookie} from "@/helper/setSaveCookies.js";
import MainFooter from "@/components/mainFooter.vue";
let store = useStore()
let authDialogVisible=ref(true)
let time = ref(0)
setTimeout(()=>time.value=100, 100)
onMounted(()=>{
    loadUserDate(store)
})
function close(){
    authDialogVisible = true
    router.push('/')
}
function deleteAuth(){
    deleteCookie('jwt')
    store.commit('setAccountDate', {})
    store.state.isAuth=false
}
</script>

<template>
    <main-header class="hc"></main-header>
    <div class="myContainer d-flex flex-column">
        <div class="flex-grow-1">
            <div v-if="store.state.isAuth">
                <personal-data-block></personal-data-block>
                <button @click="deleteAuth" class="noneBtn out d-flex align-items-center justify-content-center">Выйти</button>
                <button class="noneBtn mt-3 d-flex align-items-center justify-content-center gap-2 ms-auto me-auto backButton" @click="router.push('./')"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="#696F7A"/>
                </svg>Вернуться в магазин</button>
            </div>
            <div v-if="!store.state.isAuth & time===100">
                <auth-modal @close="close" v-if="authDialogVisible" :show="authDialogVisible"></auth-modal>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<style scoped>
.backButton{
    color: #696F7A;
    font-size: 15px;
    font-weight: 700;
    grid-area: backBtn;
}
.out{
    margin-top: 29px;
    width: 138px;
    height: 52px;
    border-radius: 8px;
    background: #E3ECF5;
    color: #696F7A;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px; /* 175% */
}

.myContainer {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
    min-height: 100vh;
}
.hc {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
}
</style>