import mainPage from "@/pages/mainPage.vue";
import {createRouter, createWebHistory} from 'vue-router'
import cartPage from "@/pages/cartPage.vue";
const routes = [
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/products/:type',
        component: mainPage
    },
    {
        path: '/cart',
        component: cartPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router