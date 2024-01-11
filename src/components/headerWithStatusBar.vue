<script setup>

import router from "@/router/router.js";
import StatusZakazBar from "@/components/statusZakazBar.vue";
</script>

<template>
<div class="header d-flex">
    <img src="@\assets\images\HeaderLogo.png"  @click="router.push('/')" alt="Logo" class="me-auto">
    <status-zakaz-bar :statusNumber="1" class="bar"></status-zakaz-bar>
</div>
</template>

<style scoped>
.header{
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
img{
    width: 82px;
    height: 60.609px;
}
.bar{
    width: 435px;
}
</style>