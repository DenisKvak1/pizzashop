<script setup>
import {useStore} from "vuex";
import {saveData} from "@/API/authPhone.js";
import {getCookie} from "@/helper/setSaveCookies.js";
import OptionAccount from "@/components/optionAccount.vue";

let store = useStore()

function saveName(data){
    let storik = JSON.parse(JSON.stringify(store.state.accountDate))
    storik.name = data
    saveData(getCookie('jwt'), storik)
}

</script>

<template>
<div class="d-flex flex-column gap-3">
    <h1 class="title text-start">Личные данные</h1>
    <option-account :work="true" :name="store.state.accountDate.name" @save="saveName" :title="'Имя'"></option-account>
    <option-account :work="false" :name="store.state.accountDate.phone" :title="'Телефон'"></option-account>
</div>
</template>

<style scoped>
.title{
    color: #F7D22D;
    font-size: 24px;
    font-weight: 800;
}

</style>