<script setup>
import {onMounted, ref, watch} from "vue";
import SelectTimeModal from "@/components/selectTimeModal.vue";
let emit = defineEmits(['save', 'newTime'])
let show = ref(false)
let props = defineProps({

})
let disabled =ref(true)
let name = ref()
let myDate = ref()
watch(()=>name.value,()=>{
    emit('newTime',myDate.value)
})
function dis(){
    show.value=true
}
function select(date){
    myDate.value = date
    show.value=false
    if(date){
        name.value = `≈ ${date.getHours()}:${date.getMinutes()}`
    } else {
        name.value='Побыстрее'
    }
}
</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <span class="label">Время доставки</span>
            <button class="label save noneBtn me-4" v-if="!disabled" @click="dis2">Сохранить</button>
        </div>
        <div class="d-flex">
            <input v-model="name" placeholder="Побыстрее" :disabled="disabled">
            <div class="changeWrap">
                <button v-show="disabled" class="noneBtn change" @click="dis">Изменить</button>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button v-if="!disabled" class="noneBtn label cancel me-4" @click="cancel">Отменить</button>
        </div>
    </div>
    <select-time-modal v-if="show" @select="select" :show="show" @close="show = false"></select-time-modal>
</template>

<style scoped>
input::placeholder{
    color: #231F20;
    opacity: 0.82;
}
button.cancel{
    color: #F7D22D;
    position: absolute;
}
button.save{
    color: #9D9D9B;
}
.changeWrap{
    position: relative;
    top: 9px;
}
.change{
    position: absolute;
    right: 15px;
    color: #F7D22D;
    font-size: 15px;
    font-weight: 700;
    line-height: 28px;
}
.label{
    color: #231F20;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.7;
}
input{
    padding-left: 20px;
    text-align: left;
    width: 100%;
    border-radius: 8px;
    border: 1.5px solid #E2E2E9;
    height: 48px;
    color: #231F20;
    font-size: 15px;
    font-weight: 700;
    opacity: 0.82;
}
input:focus{
    outline: none;
}
@media (min-width: 768px) {
    input{
        width: 350px;
    }
    button.cancel{
        color: #F7D22D;
        position: absolute;
        left: 250px;
    }
    button.save{
        color: #9D9D9B;
        position: absolute;
        left: 250px;
    }
}
@media (min-width: 1100px) {
    input {
        width: 539px;
    }
    button.cancel{
        color: #F7D22D;
        position: absolute;
        left: calc((100% - 768px )/2 + 84px);
    }
    button.save{
        color: #9D9D9B;
        position: absolute;
        left: calc((100% - 768px )/2 + 84px);
    }
}
</style>