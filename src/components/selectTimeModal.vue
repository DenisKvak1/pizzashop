<script setup>

import StartModal from "@/components/StartModal.vue";
import {ref} from "vue";
import DateItemDelivery from "@/components/dateItemDelivery.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
let emit = defineEmits(['close','select'])
const props = defineProps({
    show: Boolean
})
function select(hours,minutes){
    let date = new Date()
    if(hours && minutes){
        date.setHours(hours);
        date.setMinutes(minutes);
        if(date<new Date){
            date.setDate(date.getDate() + 1)
        }
    } else {
        date = false
    }
    emit('select', date)
}
</script>

<template>
    <start-modal  @close="$emit('close')" :show="show" v-slot="slotProps">
        <div class="content">
            <swiper
                :slides-per-view="'auto'"
                :direction="'vertical'"
                :space-between="8"
                class="mySwiper"
            >
                <swiper-slide class="slide" @click="select">
                    <date-item-delivery>Побыстрее</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(9, 15)">
                    <date-item-delivery>9:00 - 9:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(10, 15)">
                    <date-item-delivery>10:00 - 10:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(11, 15)">
                    <date-item-delivery>11:00 - 11:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(12, 15)">
                    <date-item-delivery>12:00 - 12:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(13, 15)">
                    <date-item-delivery>13:00 - 13:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(14, 15)">
                    <date-item-delivery>14:00 - 14:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(15, 15)">
                    <date-item-delivery>15:00 - 15:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(16, 15)">
                    <date-item-delivery>16:00 - 16:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(17, 15)">
                    <date-item-delivery>17:00 - 17:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(18, 15)">
                    <date-item-delivery>18:00 - 18:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(19, 15)">
                    <date-item-delivery>19:00 - 19:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(20, 15)">
                    <date-item-delivery>20:00 - 20:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(21, 15)">
                    <date-item-delivery>21:00 - 21:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(22, 15)">
                    <date-item-delivery>22:00 - 22:30</date-item-delivery>
                </swiper-slide>
                <swiper-slide class="slide" @click="select(23, 15)">
                    <date-item-delivery>23:00 - 23:30</date-item-delivery>
                </swiper-slide>
            </swiper>
        </div>
    </start-modal>
</template>

<style scoped>
/* Стили для контейнера слайдера */
.mySwiper {
    height: 100%;
}

/* Стили для слайдов */
.slide {
    height: auto !important; /* или задайте фиксированную высоту, если нужно */
}
.content{
    padding: 20px;
    border-radius: 12px;
    background: #E3ECF5;
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.08), 0px 4px 28px 0px rgba(0, 0, 0, 0.08);
    width: 300px;
    height: 700px;
}

</style>