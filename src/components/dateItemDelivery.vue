<script setup>

</script>

<template>
<div class="item d-flex">
    <span class="text-start"><slot></slot></span>
</div>
</template>

<style scoped>
span{
    color: #231F20;
    font-size: 15px;
    font-weight: 700;
    line-height: 28px; /* 186.667% */
    opacity: 0.8;
}
.item{
    padding: 11px 17px;
    width: 100%;
    height: 51.404px;
    border-radius: 8px;
    background: #FFF;
}
.select{
    border: 2px solid #F7D22D;
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.08);
}
</style>