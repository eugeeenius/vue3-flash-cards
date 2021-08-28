import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'DeckList' },
    },
    {
        path: '/deck',
        name: 'DeckList',
        component: () => import('@/views/DeckList.vue'),
    },
    {
        path: '/deck/:id',
        name: 'DeckDetail',
        component: () => import('@/views/DeckDetail.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
