import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/router.js";
import store from "@/store/index.js"
import Popper from "vue3-popper";

const app = createApp(App)
app

    .use(store)
    .use(router)
    .component("Popper", Popper)
    .mount('#app')

