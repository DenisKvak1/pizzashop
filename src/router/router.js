import mainPage from "@/pages/mainPage.vue";
import {createRouter, createWebHistory} from 'vue-router'
import NotFound from "@/pages/NotFound.vue";
const routes = [
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/:type',
        component: mainPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router