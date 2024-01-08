<script setup>
let props= defineProps({
    products: Array,
})

import NewItemSlider from "@/components/newItemSlider.vue";
</script>

<template>
    <div class="block">
        <div class="img_wrap">
            <img src="@/assets/images/Man.png">
        </div>
        <p class="mb-0 d-flex newTitle">Новинки</p>
        <new-item-slider @addToCart="(data)=>$emit('addToCart', data)" :products="products"></new-item-slider>
    </div>
</template>

<style scoped>
.img_wrap{
    position: absolute;
    left: -30px;
}
.img_wrap img{
    position: relative;
    z-index: -1;
    top: 18px;
    width: 73.011px;
    height: 93.693px;
    transform: rotate(10.6deg);
    opacity: 0.4;
}
.newTitle{
    font-size: 19px;
    font-weight: 700;
}
@media (min-width: 768px){
    .block{
        margin-top: 12px;
    }
    .img_wrap img{
        width: 196.674px;
        height: 252.385px;
        top: -25px;
    }
    .newTitle{
        font-size: 21px;
    }
    .img_wrap{
        left: -70px;
    }
}

@media (min-width: 1100px){
    .img_wrap img{
        width: 238.274px;
        height: 364.104px;
        top: -25px;
        opacity: 1;
    }
    .img_wrap{
        left: -100px;
    }
}
</style>