<script setup>

import SousSwiper from "@/components/SousSwiper.vue";
import StartModal from "@/components/StartModal.vue";
import {onMounted, reactive} from "vue";
import SousTextRepSlider from "@/components/sousTextRepSlider.vue";
import {useStore} from "vuex";
let store = useStore()
let emit = defineEmits(['close'])
const props = defineProps({
    product: Object,
    show: Boolean
})
let souses = reactive(JSON.parse(JSON.stringify(store.state.addOnForProducts[props.product.category])));
let tempProduct = reactive({
    product: props.product,
    souses: [],
    size: 'M',
});
tempProduct.product.count=1
function delSous(data) {
    let index = souses.findIndex((item) => item.id === data.id);
    if (souses[index].addC) {
        souses[index].addC = false;
    }
    let someInArray = tempProduct.souses.some((obj) => obj.id === data.id);
    if (someInArray) {
        tempProduct.souses = tempProduct.souses.filter(item => item.id !== data.id);
    }
}

function addSous(data) {
    let index = souses.findIndex((item) => item.id === data.id);
    if (!souses[index].addC) {
        souses[index].addC = true;
    } else {
        souses[index].addC = false;
    }

    let someInArray = tempProduct.souses.some((obj) => obj.id === data.id);
    if (!someInArray) {
        tempProduct.souses.push(data);
    } else {
        tempProduct.souses = tempProduct.souses.filter(item => item.id !== data.id);
    }
}
function addToCart(){
    store.dispatch('pushItemInCart', tempProduct)
    emit('close')
}

</script>

<template>

    <start-modal class="modal"  @close="$emit('close')" :show="show" v-slot="slotProps">
            <div class="content">
                <div class="align-items-center header">
                    <h3 class="title me-auto">Товар</h3>
                    <button @click="slotProps.close" class="noneBtn close" >
                        <img src="@/assets/images/CloseIcon.png">
                    </button>
                </div>
                <img class="item" :src="product.image2">
                <div class="mainBlock">
                    <div class="headerBlockToo">
                        <div class="me-auto">
                            <h5 class="text-start nameTitle mb-0">{{product.title}}</h5>
                            <p class="text-start description mb-0">{{product.length}} см,  {{product.weight}} г </p>
                        </div>
                        <button @click="slotProps.close" class="noneBtn closeToo" >
                            <img src="@/assets/images/CloseIcon.png">
                        </button>
                    </div>
                    <sous-text-rep-slider class="sousTextSlider" :souses="tempProduct.souses" @delSouse="delSous"></sous-text-rep-slider>
                    <div class="d-flex flex-wrap gap-2">
                        <button :class="{sizeActive:tempProduct.size==='S'}" class="noneBtn size" @click="tempProduct.size='S'">S</button>
                        <button :class="{sizeActive:tempProduct.size==='M'}" class="noneBtn size" @click="tempProduct.size='M'">M</button>
                        <button :class="{sizeActive:tempProduct.size==='XL'}" class="noneBtn size"@click="tempProduct.size='XL'">XL</button>
                    </div>
                    <sous-swiper @addSous="addSous" class="souses" :souses="souses"></sous-swiper>
                    <button class="noneBtn addToCart" @click="addToCart">Добавить в корзину {{ tempProduct.souses.reduce((a, cv)=> a + cv.price,0)+product.price}} ₽</button>
                </div>
            </div>
    </start-modal>
</template>

<style scoped>
.sousTextSlider{
    margin-bottom: 7px;
}
.header{
    display: flex;
}
.addToCart{
    width: 100%;
    height: 59px;

    border-radius: 8px;
    background: #F7D22D;
}
.modal{
    z-index: 3000;
    padding: 25px 0;
}
.souses{
    margin-top: 20px;
    width: 220px;
    margin-left: auto;
    margin-right: auto;
}
.size{
    border-radius: 8px;
    opacity: 0.9;
    background: #F3F3F7;
    width: 48%;
    height: 34px;
    color: #828792;
    font-size: 11px;
    font-weight: 700;
}
.sizeActive{
    color: #231F20;
    background: #F7D22D;
}

.description{
    color: #686466;
    font-size: 12px;
    font-weight: 600;
}
.nameTitle{
    margin-top: 18px;
    font-size: 15px;
    font-weight: 800;
}
.close img{
    width: 25px;
    height: 25px;
}
.closeToo img{
    width: 28px;
    height: 28px;
}
.item{
    width: 100%;
}
.content{

    width: 300px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.08), 0px 4px 28px 0px rgba(0, 0, 0, 0.08);
    padding: 28px 20px 20px;
}
.title{
    color: #F7D22D;
    font-size: 25px;
    font-weight: 800;
    line-height: 17px;

}
.closeToo{
    display: none;
}
@media (min-width: 1100px){
    .header{
        display: none;
    }
    .content{
        display: flex;
        gap: 27px;
        padding: 30px;
        width: 959px;
        height: 610px;
    }
    .item{
        width: 504px;
        height: 504px;
    }
    .size{
        width: 30%;
    }
    .closeToo{
        display: block;
    }
    .headerBlockToo{
        display: flex;
        align-items: start;
    }
    .nameTitle{
        font-size: 20px;
        margin-top: 0;
    }
    .souses{
        width: auto;
    }
    .description{
        font-size: 14px;
    }
    .mainBlock{
        display: flex;
        flex-direction: column;
    }
    .souses{
        flex-grow: 1;
    }
}
</style>