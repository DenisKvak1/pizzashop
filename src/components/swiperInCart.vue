<script setup>

import {Swiper, SwiperSlide} from "swiper/vue";
import SousItem from "@/components/sousItem.vue";
import CartItem from "@/components/cartItem.vue";
import SousTextRep from "@/components/sousTextRep.vue";
import {useStore} from "vuex";
import {ref, watch} from "vue";

let store = useStore()
let props = defineProps({
    show: Boolean
})
</script>
<template>
    <swiper
        v-if="show"
        :direction="'vertical'"
        :slidesPerView="'auto'"
        class="mySwiper"
        >
        <swiper-slide class="slide" v-for="item in store.state.cart" :key="item.product.id">
            <cart-item @delete="(data)=> $emit('delete', data)" :product="item.product" ></cart-item>
            <sous-text-rep class="sous" v-for="sous in item.souses" :sous="sous" @delSouse="(data)=>$emit('delSouse', {data:data, item:item})"></sous-text-rep>
        </swiper-slide>
    ></swiper>
</template>

<style scoped>
.sous{
    padding: 5px 15px;
}
.mySwiper{
    max-height: 300px;
}
.slide{
    height: auto;
}
@media(min-width: 768px){
    .mySwiper{
        max-height: 400px;
    }
}

</style>