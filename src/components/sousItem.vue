<script setup>
let props= defineProps({
    sous: Object
})

</script>

<template>
    <button :class="{ select: sous.addC }" class="btnNone item d-flex flex-column align-items-center" @click="$emit('addSous',sous)">
        <img :src="sous.image">
        <h5 class="titleSous mb-0">{{sous.title}}</h5>
        <h3 class="price mb-0">от {{sous.price}} ₴</h3>
    </button>
</template>

<style scoped>

.price{
    margin-top: 11px;
    color: #F7D22D;
    font-size: 14px;
    font-weight: 800;
}
.titleSous{
    color: #000;
    font-size: 13px;
    font-weight: 600;
    line-height: 14px; /* 107.692% */
}
.item img{
    width: 64.775px;
    height: 71px;
}
.item{
    width: 101.95px;
    height: 159px;
    border-radius: 12px;
    border: 1.5px solid #E2E2E9;
    background: #FFF;
    padding: 17px;
}
.select{
    border-color: rgba(247, 210, 45, 0.40);
    border-width: 2px;
}
</style>