<script setup>
import {onMounted, ref, watch} from "vue";
let emit = defineEmits(['save'])
let props = defineProps({
    name : String,
    work : Boolean,
    title : String,
    type : String
})
let disabled =ref(true)
let name = ref()
let backName = ref()
onMounted(()=>{
    name.value = props.name
})
watch(()=>props, ()=>{
    name.value = props.name
}, {deep: true})
function dis(){
    disabled.value ? disabled.value=false : disabled.value=true
    backName.value = name.value
}
function dis2(){
    disabled.value ? disabled.value=false : disabled.value=true
    if(name.value){
        emit('save', name.value)
    } else {
        name.value = backName.value
    }
}
function cancel(){
    disabled.value ? disabled.value=false : disabled.value=true
    name.value = backName.value
}
</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <span class="label">{{ title }}</span>
            <button class="label save noneBtn me-4" v-if="!disabled && work" @click="dis2">Сохранить</button>
        </div>
        <div class="d-flex">
            <input v-model="name" :type="type" :disabled="disabled">
            <div class="changeWrap">
                <button v-show="disabled && work" class="noneBtn change" @click="dis">Изменить</button>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <button v-if="!disabled && work" class="noneBtn label cancel me-4" @click="cancel">Отменить</button>
        </div>
    </div>
</template>

<style scoped>
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
    input{
        width: 539px;
    }
    button.cancel{
        color: #F7D22D;
        position: absolute;
        left: calc((100% - 768px )/2 + 280px);
    }
    button.save{
        color: #9D9D9B;
        position: absolute;
        left: calc((100% - 768px )/2 + 280px);
    }
}
</style>