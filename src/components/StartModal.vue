<script setup>
import {onBeforeUnmount, onMounted, watch} from "vue";

const props = defineProps({
    show: Boolean,
})
const emit = defineEmits(['close'])
function hideDialog(){
    emit('close')
}
onMounted(()=>{
    document.body.style.overflow = 'hidden';
})
onBeforeUnmount(()=>{
    document.body.style.overflow = '';
})
</script>

<template>
    <div class="dialog" v-if="show" @click="hideDialog" >
        <div @click.stop class="dialog__content">
            <slot :close="hideDialog"></slot>
        </div>
    </div>
</template>

<style scoped>
.dialog{
    display: flex;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(247, 210, 45, 0.40) 0%, rgba(247, 210, 45, 0.40) 100%), rgba(33, 49, 52, 0.20);
    z-index: 3000;
}
.dialog__content{
    margin: auto;
}
</style>