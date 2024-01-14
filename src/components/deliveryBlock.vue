<script setup>

import OptionAccount from "@/components/optionAccount.vue";
import {useStore} from "vuex";
import DeliveryInput from "@/components/deliveryInput.vue";
import {onMounted, ref, watch} from "vue";
let emit = defineEmits(['updateDate'])
let store = useStore()
let name = ref()
let phone = ref()
let address = ref()
let time = ref()
watch(()=>[store.state.accountDate.name, store.state.accountDate.phone], ()=>{
    name.value = store.state.accountDate.name
    phone.value = store.state.accountDate.phone
})
emit('updateDate',{name: name.value,phone: phone.value, address: address.value, time:time.value})
watch(()=>[store, name,phone,address,time],()=>{
    emit('updateDate',{name: name.value,phone: phone.value, address: address.value, time:time.value ? time.value : false})
}, {deep: true})
</script>

<template>
<div>
    <h1 class="title text-start">Заказ на доставку</h1>

        <div class="d-flex flex-column gap-3">
            <option-account v-model="name" v-if="store.state.accountDate.name" :type="'text'" :work="true" :title="'Имя'" :name="store.state.accountDate.name"></option-account>
            <div v-else>
                <span class="label d-flex">Имя</span>
                <input v-model="name">
            </div>
            <option-account v-model="phone" v-if="store.state.accountDate.phone" :type="'number'" :work="true" :title="'Номер телефона'" :name="store.state.accountDate.phone"></option-account>
            <div v-else>
                <span class="label d-flex">Номер телефона</span>
                <input v-model="phone">
            </div>
            <div>
                <span class="label d-flex">Адрес доставки</span>
                <textarea v-model="address" class="deliveryInput mt-1"></textarea>
            </div>
            <delivery-input @newTime="(data)=>time = data"></delivery-input>
        </div>
</div>
</template>

<style scoped>
.deliveryInput{
    height: 100px;
    padding: 10px 20px;
}
.title{
    color: #F7D22D;
    font-size: 26px;
    font-weight: 800;
}
input,textarea{
    padding-left: 20px;
    text-align: left;
    width: 100%;
    border-radius: 8px;
    border: 1.5px solid #E2E2E9;
    height: 48px;
    color: #231F20;
    font-size: 15px;
    font-weight: 700;
}
input:focus,textarea:focus{
    outline: 0;
}
.label{
    color: #231F20;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.7;
}
@media (min-width: 768px) {
    textarea {
        width: 350px;
        display: flex;
    }
}
@media (min-width: 1100px) {
    textarea {
        width: 539px;
    }
}
</style>