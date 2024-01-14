<script setup>
import StartModal from "@/components/StartModal.vue";
import {authPhone, authPhoneCode} from "@/API/authPhone.js";
import {ref} from "vue";
import ClassicButton from "@/UI/classicButton.vue";
import {getCookie, setCookie} from "@/helper/setSaveCookies.js";
import {useStore} from "vuex";
import router from "@/router/router.js";
const props = defineProps({
    show: Boolean
})
const emit = defineEmits(['close'])
let store = useStore()
let phone = ref()
let code = ref()
let state= ref(1)
let invalid = ref(false)
let invalidCode = ref(false)
let error = ref(false)
async function thisAuthPhone(){
    if(!isNaN(+phone.value)){
        let response = await authPhone(phone.value)
        if(response.success){
            state.value=2
        }
    } else {
        invalid.value =true
        setTimeout(()=>invalid.value = false,1000)
    }
}
async function thisAuthPhoneCode(){
    if((+code.value>=100000 && +code.value<=999999)){
        let response = await authPhoneCode(code.value, phone.value)
        if(response.success){
            store.commit('setAccountDate',response.data)
            if(!getCookie('jwt') || getCookie('jwt') !== response.jwt){
                setCookie('jwt', response.jwt, 10)
            }
            store.state.isAuth = true
            emit('close')
        } else if(response.manyRequest) {
            error.value = true
            invalidCode.value = true
        }
    }else {
        invalidCode.value = true
        setTimeout(()=>invalidCode.value = false,1000)
    }
}
</script>

<template>
    <start-modal  @close="$emit('close')" :show="show" v-slot="slotProps">
        <div class="content">
            <div class="d-flex justify-content-between">
                <h2 class="title">Вход на сайт</h2>
                <button @click="slotProps.close" class="noneBtn close" >
                    <img src="@/assets/images/CloseIcon.png">
                </button>
            </div>
            <div class="mt-3 blockN" v-if="state===1">
                <span class="numText text-start me-auto d-block">Номер телефона:</span>
                <input :class="{invalid: invalid}"  v-model="phone" type="text" class="mobileText mt-2">
            </div>
            <div v-if="state===2">
                <div class="mt-3 blockN" >
                    <span class="numText text-start me-auto d-block">Код из СМС</span>
                    <input :class="{invalid: invalidCode}" v-model="code" type="text" class="mobileText mt-2">
                </div>
                <span v-if="error" class="error mt-2">Слишком много запросов, возвращайтесь через 10 минут</span>
            </div>
            <div class="blockSend" v-if="state===2">
                <button class="mt-2 noneBtn sendCode" @click="thisAuthPhoneCode">Подтвердить код</button>
                <p class="wrong mt-2">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
            </div>
            <div class="blockSend" v-if="state===1">
                <button class="noneBtn sendCode" @click="thisAuthPhone">Выслать код</button>
                <p class="wrong mt-2">Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
            </div>
        </div>
    </start-modal>
</template>

<style scoped>
.error{
    color: rgba(255, 24, 24, 0.8);
}
.invalid{
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
}
.wrong{
    text-align: left;
    color: #9D9D9B;
    font-size: 10px;
    font-weight: 600;
}
.sendCode{
    margin-top: 6px;
    width: 100%;
    height: 55px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    background: #F7D22D;
    border-radius: 8px;
}
.mobileText{
    padding-left: 13px;
    text-align: left;
    width: 100%;
    border-radius: 8px;
    border: 1.5px solid #E2E2E9;
    height: 48px;
    color: #231F20;
    font-size: 15px;
    font-weight: 700;
}
.mobileText:focus{
    outline: none;
}
.numText{
    color: #686466;
    font-size: 13px;
}
.title{
    color: #F7D22D;
    font-size: 25px;
    font-weight: 800;
}
.content{
    padding: 25px 20px;
    width: 300px;
    background-color: white;
    border-radius: 12px;

}
.close img{
    width: 25px;
    height: 25px;
}
@media(min-width: 768px){
    .content{
        width: 668px;
        height: 320px;
        padding: 40px;
    }
    .blockN{
        display: flex;
        align-items: center;
    }
    .numText{
        flex-shrink: 0;
        padding-right: 32px;
    }
    .sendCode{
        flex-shrink: 0;
        width: 224px;
    }
    .blockSend{
        margin-top: 70px;
        align-items: start;
        display: flex;
        gap: 24px;
    }
    .wrong{
        font-size: 13px;
    }
}
</style>