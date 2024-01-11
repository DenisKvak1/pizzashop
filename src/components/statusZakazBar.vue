<script setup>
let props = defineProps({
    statusNumber: Number
})
</script>

<template>
    <div class="d-flex main">
            <div class="stat d-flex flex-column align-items-center">
                <div :class="{active:statusNumber===1}" class="status">1</div>
                <div>
                    <span :class="{activeStatus:statusNumber===1}" class="nameStat">Корзина</span>
                </div>
            </div>
            <div class="line"></div>
            <div class="stat d-flex flex-column align-items-center">
                <div :class="{active:statusNumber===2}" class="status">2</div>
                <div>
                    <span :class="{activeStatus:statusNumber===2}" class="nameStat">Оформление заказа</span>
                </div>
            </div>
            <div class="line"></div>
            <div class="stat d-flex flex-column align-items-center">
                <div :class="{active:statusNumber===3}" class="status">3</div>
                <div>
                    <span :class="{activeStatus:statusNumber===3}" class="nameStat">Заказ принят</span>
                </div>
            </div>
        </div>
</template>

<style scoped>

.active{
    background-color: #F7D22D;
    color: #231F20 !important;
}
.activeStatus{
    color: rgba(14, 12, 13, 0.80) !important;
}
.nameStat{
    position: absolute;
    white-space: nowrap;
    color: rgba(105, 111, 122, 0.95);
    font-size: 13px;
    line-height: 28px; /* 254.545% */
    transform: translateX(-50%);

}
.main{
    gap: 20px;
    align-items: center;
    padding-left: 10px;
    padding-right: 30px;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.line{
    width: 100%;
    height: 2px;
    border: 1.3px dashed #B8C5D0;
}

.status{
    padding: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F7D22D;
    border: 2.3px solid #F7D22D;
    width: 36px;
    height: 36px;
    border-radius: 50%;
}
@media(min-width: 768px){
    .main{
        border-bottom: none;
    }
}
</style>