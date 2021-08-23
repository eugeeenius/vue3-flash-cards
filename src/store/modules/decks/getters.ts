import { GetterTree } from 'vuex';
import { DecksState } from '@/store/modules/decks/types';
import { RootState } from '@/store/types';
import { Deck } from '@/models/Deck';

export const getters: GetterTree<DecksState, RootState> = {
    getDecksList(state): Deck[] {
        return state.decks;
    },

    isDecksListEmpty(state) {
        return !state.decks.length;
    },

    getNavbarDecksList(state): Deck[] {
        return state.decks.map((deck) => ({
            ...deck,
            route: `/deck/${deck.id}`,
        }));
    },

    getDeckById(state) {
        return function findDeck(id: number | string): Deck | undefined {
            return state.decks.find((deck: Deck) => deck.id === Number(id));
        };
    },
};
