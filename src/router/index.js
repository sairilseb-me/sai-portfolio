import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/views/Homepage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router