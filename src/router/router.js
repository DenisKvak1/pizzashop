import mainPage from "@/pages/mainPage.vue";
import {createRouter, createWebHistory} from 'vue-router'
import cartPage from "@/pages/cartPage.vue";
import personAccountPage from "@/pages/personAccountPage.vue";
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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router