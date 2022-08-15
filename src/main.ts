import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home-page",
            path: "/",
            component: import("./pages/home-page.vue")
        },
    ]

})

createApp(App).use(router).mount('#app')
