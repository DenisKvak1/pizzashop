<script setup>
import MainHeader from "@/components/mainHeader.vue";
import PersonalDataBlock from "@/components/personalDataBlock.vue";
import {useStore} from "vuex";
import {loadUserDate} from "@/hooks/localStorageHook.js";
import {onMounted, ref} from "vue";
import AuthModal from "@/components/authModal.vue";
import router from "@/router/router.js";
import {deleteCookie} from "@/helper/setSaveCookies.js";
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
    <div class="myContainer">
        <div v-if="store.state.isAuth">
            <personal-data-block></personal-data-block>
            <button @click="deleteAuth" class="noneBtn out d-flex align-items-center justify-content-center">Выйти</button>
        </div>
        <div v-if="!store.state.isAuth & time===100">
            <auth-modal @close="close" v-if="authDialogVisible" :show="authDialogVisible"></auth-modal>
        </div>
    </div>

</template>

<style scoped>
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
</style>