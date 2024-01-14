import mainPage from "@/pages/mainPage.vue";
import {createRouter, createWebHistory} from 'vue-router'
import cartPage from "@/pages/cartPage.vue";
import personAccountPage from "@/pages/personAccountPage.vue";
import deliveryPage from "@/pages/deliveryPage.vue";
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
    {
        path: '/account',
        component: personAccountPage
    },
    {
        path: '/delivery',
        component: deliveryPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router