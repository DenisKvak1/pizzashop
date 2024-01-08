<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import NewItem from "@/components/newItem.vue";
import {filterNewProducts} from "@/helper/filterNewProducts.js";
import {computed, onMounted, ref, watch} from "vue";
import {onBeforeRouteUpdate} from "vue-router";

const props = defineProps({
    products:Array,
})
let newItem=computed(()=>filterNewProducts(props.products))
</script>

<template>
    <swiper
        v-if="newItem"
        :slidesPerView="'auto'"
        :spaceBetween="15"
        class="mySwiper"
    >
        <swiper-slide class="cont" v-for="product in newItem"  :key="product.id">
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