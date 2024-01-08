<script setup>


</script>

<template>
    <router-view></router-view>
</template>

<style >
.noneBtn{
    background: none;
    border: none;
    outline: none;
}
.swiper-button-next{
    background: url('@/assets/images/navNext.svg') no-repeat;
}
.swiper-button-next:after {
    font-family: Arial;
    color: transparent;
}
.swiper-button-prev{
    background: url('@/assets/images/navPrev.svg') no-repeat;
}
.swiper-button-prev:after {
    font-family: Arial;
    color: transparent;
}

</style>
