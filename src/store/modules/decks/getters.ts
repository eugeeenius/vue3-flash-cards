import { GetterTree } from 'vuex';
import { DecksState } from '@/store/modules/decks/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<DecksState, RootState> = {
    getNavbarDecksList(state) {
        return state.decks.map((deck) => ({
            id: deck.id,
            title: deck.title,
            route: `/decks/${deck.id}`,
        }));
    },
};
