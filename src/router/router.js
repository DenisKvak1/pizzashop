import mainPage from "@/pages/mainPage.vue";
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/products/:type',
        component: mainPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router