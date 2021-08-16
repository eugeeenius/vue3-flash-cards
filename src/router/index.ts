import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store/index';

const defaultId: string = store.getters['decks/getDecksList'][0]?.id || 1;

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'DeckDetail', params: { id: defaultId } },
    },
    {
        path: '/deck',
        redirect: { name: 'DeckDetail', params: { id: defaultId } },
        name: 'Deck',
    },
    {
        path: '/deck/:id',
        name: 'DeckDetail',
        component: () => import('@/views/Deck.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
