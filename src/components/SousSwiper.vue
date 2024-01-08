<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {computed, defineProps, ref} from "vue";
import SousItem from "@/components/sousItem.vue";


const props = defineProps({
    souses:Array,
});
let screen = computed(()=>{
    return window.innerWidth
})

</script>

<template>
    <swiper
        :direction="'vertical'"
        :slidesPerView="'auto'"
        :spaceBetween="4.3"
        class="mySwiper"
    >
        <swiper-slide class="slide" v-for="(sous, index) in souses" :key="sous.id">
            <div class="d-flex gap-3" v-if="index % 2 === 0 && screen<1100">
                <sous-item  @addSous="(data)=>$emit('addSous', data)" :sous="sous"></sous-item>
                <sous-item  @addSous="(data)=>$emit('addSous', data)" v-if="index + 1 < souses.length" :sous="souses[index + 1]"></sous-item>
            </div>
            <div class="d-flex gap-3" v-if="index % 3 === 0 && screen > 1100">
                <sous-item  @addSous="(data)=>$emit('addSous', data)" :sous="sous"></sous-item>
                <sous-item  @addSous="(data)=>$emit('addSous', data)" v-if="index + 1 < souses.length" :sous="souses[index + 1]"></sous-item>
                <sous-item  @addSous="(data)=>$emit('addSous', data)" v-if="index + 2 < souses.length" :sous="souses[index + 2]"></sous-item>
            </div>
        </swiper-slide>


    </swiper>
</template>

<style scoped>
.slide{
    height: auto;
}
.mySwiper{
    height: 250px;
}
@media (min-width: 1100px) {
    .mySwiper{
        height: 300px;
    }
}
</style>