<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {computed, defineProps, ref} from "vue";
import SousItem from "@/components/sousItem.vue";
import SousTextRep from "@/components/sousTextRep.vue";


const props = defineProps({
    souses:Array,
});


</script>

<template>
    <div class="cont">
        <p v-if="souses.length===0" class="tyt mb-0">Ваши добавки к заказу</p>
        <swiper
            v-if="souses.length>0"
            :direction="'vertical'"
            :slidesPerView="'auto'"
            :spaceBetween="0"
            class="mySwiper"
        >
            <swiper-slide class="slide" v-for="sous in souses" :key="sous.id">
                <sous-text-rep @delSouse="(data)=>$emit('delSouse', data)" :sous="sous"></sous-text-rep>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped>
.tyt{
    font-size: 14px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cont{
    height: 70px;
}
.mySwiper{
    height: 70px;
}
.slide{
    height: auto;
}

</style>