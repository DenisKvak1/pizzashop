<script setup>
import {ref} from "vue";
import testPromo from "@/API/testPromo.js";
import {useStore} from "vuex";
let emit = defineEmits(['addPromo'])
let promo = ref()
let isWrong = ref(false)
let isTrue = ref(false)
let store = useStore()
async function thisTestPromo(){
    let response = await testPromo(promo.value)
    if(response.success){
        emit('addPromo')
        store.commit('setPromo', promo.value)
        store.commit('setDiscount', response.discount)
        isWrong.value = false
        isTrue.value = true
        setTimeout(()=>isTrue.value = false, 1000)
        promo.value = ''
    }else {
        isWrong.value = true
        setTimeout(()=>isWrong.value = false, 1000)
    }
}
</script>

<template>
    <div class="input-group mb-3" :class="{wrongClass: isWrong, trueClass : isTrue}">
        <input  v-model="promo" type="text" placeholder="Введите промокод" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <button  @click="thisTestPromo" class="input-group-text" id="basic-addon2">Применить</button>
    </div>
</template>

<style scoped>
.trueClass{
    box-shadow: 0 0px 5px rgba(74, 246, 0, 0.5);
}
.wrongClass{
    box-shadow: 0 0px 5px rgba(255, 0, 0, 0.5);
}
.input-group{
    height: 43px;
    border-radius: 8px;
}
.form-control{
    color: #686466;
    font-size: 13px;
    font-weight: 600;
    border: 1.5px solid #E2E2E9;
    border-right: none;
}
.form-control:focus{
    box-shadow: none;
}
.form-control::placeholder{
    top: 11.5px;
    left: 22px;
    position: absolute;
    color: #686466;
    font-size: 13px;
    font-weight: 600;

}
.input-group-text{
    z-index: 1001;
    border-radius: 0px 8px 8px 0px;
    background: #F7D22D;
    font-size: 13px;
    font-weight: 700;
    border: none    ;
}
@media(min-width: 768px){
    .input-group{
        width: 353px;
    }
    .input-group{
        margin-bottom: 0 !important;
    }
}
</style>