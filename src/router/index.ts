import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'Deck' },
    },
    {
        path: '/deck',
        name: 'Deck',
        component: () => import('@/views/Deck.vue'),
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
