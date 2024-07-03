import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: "home",
                    component: Home,
                    name: "Home"
                },
            ]
        }
    ]
})

export default router
