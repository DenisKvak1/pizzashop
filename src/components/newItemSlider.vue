<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import NewItem from "@/components/newItem.vue";
import {filterNewProducts} from "@/helper/filterNewProducts.js";
import {computed, onMounted, ref, watch} from "vue";
import {onBeforeRouteUpdate} from "vue-router";

const props = defineProps({
    products:Array,
})
</script>

<template>
    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="15"
        class="mySwiper"
    >
        <swiper-slide class="cont" v-for="product in products"  :key="product.id">
            <new-item @addToCart="(data)=>$emit('addToCart', data)" class="now" :product="product"></new-item>
        </swiper-slide>
    </swiper>
</template>

<style scoped>
.cont{
    width: auto;
    padding: 11px 0;
}

</style>