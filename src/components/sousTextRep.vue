<script setup>
let props= defineProps({
    sous:Object
})
</script>

<template>
    <div class="text-start sous d-flex align-items-center">
        <p class="itemSous mb-0">{{sous.title}}</p>
        <button class="noneBtn delSous" @click="$emit('delSouse', sous)">
            <img src="@/assets/images/DeleteSous.png">
        </button>
    </div>
</template>

<style scoped>
.sous{
    height: 20px;
}
.itemSous{
    color: #686466;
    font-size: 11px;
    font-weight: 600;
    opacity: 0.6;
}
.delSous img{
    width: 20px;
    height: 20px;
    opacity: 0.6;
}
@media (min-width: 1100px) {
    .itemSous{
        font-size: 12px;
        line-height: 28px;
    }
}

</style>