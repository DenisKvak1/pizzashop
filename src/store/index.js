import {createStore} from "vuex";
import fetchData from "@/API/FetchData.js";

export default createStore({
    state:{
        products: null,
        cart: [],
        addOnForProducts:{
            sous:[
                {title:'Хитрый соус 1', id:1, price:120, image:'/src/assets/images/Sous.png'},
                {title:'Хитрый соус 2', id:2, price:110, image:'/src/assets/images/Sous.png'},
                {title:'Хитрый соус 3', id:3, price:140, image:'/src/assets/images/Sous.png'},
                {title:'Хитрый соус 4', id:4, price:120, image:'/src/assets/images/Sous.png'},
                {title:'Хитрый соус 5', id:5, price:250, image:'/src/assets/images/Sous.png'},
                {title:'Хитрый соус 6', id:6, price:70, image:'/src/assets/images/Sous.png'},
                {title:'Хитрый соус 7', id:7, price:131, image:'/src/assets/images/Sous.png'},
            ],
            addonDrink:[
                {title:'Не хитрое пиво 1', id:1, price:120, image:'/src/assets/images/Sous.png'},
                {title:'Доверчивый сухарь 2', id:2, price:110, image:'/src/assets/images/Sous.png'},
                {title:'Не хитрое пиво 3', id:3, price:140, image:'/src/assets/images/Sous.png'},
                {title:'Доверчивый сухарь 4', id:4, price:120, image:'/src/assets/images/Sous.png'},
                {title:'Не хитрое пиво 5', id:5, price:250, image:'/src/assets/images/Sous.png'},
            ]
        }
    },
    getters:{

    },
    mutations:{
        setData(state, newData) {
            state.products = newData;
        },
        setCart(state, newData){
            state.cart= newData
        }
    },
    actions:{
        async loadDataApi({commit}, name){
            let fetchdata= await fetchData(name)
            commit('setData', fetchdata);
        },
        pushItemInCart({commit, state}, newItem){
            let tempCart = JSON.parse(JSON.stringify(state.cart))
            if(!state.cart.some((item)=>item.product.id=== newItem.product.id)){
                tempCart.push(newItem)
                commit('setCart', tempCart)
            }
        },
        deleteItemInCart({commit, state}, newItem){
            let tempCart = JSON.parse(JSON.stringify(state.cart))
            if(state.cart.some((item)=>item.product.id === newItem.id)){
                tempCart=tempCart.filter((item)=>item.product.id !== newItem.id)
                commit('setCart', tempCart)
            }
        },
        addCountInItemCart({commit, state}, item){
            let tempCart = JSON.parse(JSON.stringify(state.cart))
            let index = tempCart.findIndex((element)=>element.product.id === item.id )
            tempCart[index].product.count+=1;
            commit('setCart', tempCart)
        },
        removeCountInItemCart({commit, state}, item){
            let tempCart = JSON.parse(JSON.stringify(state.cart))
            let index = tempCart.findIndex((element)=>element.product.id === item.id )
            if(tempCart[index].product.count>1){
                tempCart[index].product.count-=1;
                commit('setCart', tempCart)
            }
        },

    },
    modules:{

    }
})