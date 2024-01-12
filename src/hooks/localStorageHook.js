import {getCookie} from "@/helper/setSaveCookies.js";
import {loadData} from "@/API/authPhone.js";
export async function loadUserDate(store){
    let loadJwt = getCookie('jwt')
    if(getCookie('jwt')){
        let data = await loadData(loadJwt)
        if(data.success){
            store.state.isAuth=true
            store.commit('setAccountDate',data.data)
        }
    }
}