import { GetterTree } from 'vuex';
import { DecksState } from '@/store/modules/decks/types';
import { RootState } from '@/store/types';
import { Deck } from '@/models/Deck';

export const getters: GetterTree<DecksState, RootState> = {
    getNavbarDecksList(state) {
        return state.decks.map((deck) => ({
            id: deck.id,
            title: deck.title,
            route: `/decks/${deck.id}`,
        }));
    },

    getDeckById(state) {
        return function findDeck(id: number | string): Deck | undefined {
            return state.decks.find((deck: Deck) => deck.id === Number(id));
        };
    },
};
