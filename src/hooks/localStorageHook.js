import {watch} from "vue";
import {loadLocalData, saveLocalData} from "@/helper/LocalStorage.js";
export function saveLoadLocalStorage(store){
    let data
    let loadData = loadLocalData('cart')
    if(loadData){
        data = loadData
    } else {
        data = []
    }

    watch(()=>store.state.cart, (newValue)=>{
        saveLocalData('cart', newValue)
    })
    store.commit('setCart', data)
}