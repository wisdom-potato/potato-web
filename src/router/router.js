import {createRouter, createWebHashHistory} from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'
import HardwareProducts from "../views/hardware-products.vue";
import CompetitionSolutions from "../views/competition-solutions.vue";
import SteamEducation from "../views/steam-education.vue";

const routes = [
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
            {
                path: "hardware-products",
                component: HardwareProducts,
                name: "HardwareProducts"
            },
            {
                path: "competition-solutions",
                component: CompetitionSolutions,
                name: "CompetitionSolutions"
            },
            {
                path: "steam-education",
                component: SteamEducation,
                name: "SteamEducation"
            }
        ]
    }
]

const router = createRouter({
    mode: "history",
    history: createWebHashHistory(),
    routes,
})

export default router
