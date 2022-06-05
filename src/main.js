import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import routes from '@/routing'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import orderinfo from '@/pages/orderinfo'
const routing = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app = createApp(App)
app.use(routing)
app.use(orderinfo)
app.mount('#app')