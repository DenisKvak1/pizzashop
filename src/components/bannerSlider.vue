<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import {ref} from "vue";

const props = defineProps({
    banners: Array
});

const modules=ref([Navigation])
const br = {
    500: {
        slidesPerView: 2,
    }
}

</script>

<template>
    <div>

        <swiper
            :breakpoints="br"
            :slides-per-view="'auto'"
            :space-between="12"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide class="slideM" v-for="banner in banners" :key="banner.id">
                <img :src="banner.image" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped>
.mySwiper{
    margin-top: 5px;
}
.slideM{
    padding-bottom: 12px;
    width: auto;
    display: flex;
    justify-content: start;
}
.slideM img{
    height: 124px;
    object-fit: cover;
    width: auto;
    border-radius: 13px;
    z-index: 900;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.26);
}
@media (min-width: 550px) {
    .slideM img{
        height: 150px;
    }
}
@media (min-width: 650px) {
    .slideM img{
        height: 180px;
    }
}
@media (min-width: 768px) {
    .slideM img{
        height: 206px;
    }
}
@media (min-width: 900px) {
    .slideM img{
        height: 250px;
    }
}
@media (min-width: 1110px) {
    .slideM img{
        height: 290px;
    }
}

</style>
