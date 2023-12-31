import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/views/Homepage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../components/views/Contact.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../components/views/Projects.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router