import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { DecksState } from '@/store/modules/decks/types';
import { getters } from '@/store/modules/decks/getters';

const state: DecksState = {
    decks: [
        {
            id: 1,
            title: 'First1',
            cards: [
                {
                    id: 1,
                    question: 'strin1g',
                    answer: 'string|number',
                },
            ],
        },
        {
            id: 2,
            title: 'Sec',
            cards: [
                {
                    id: 1,
                    question: 'strin2g',
                    answer: 'string|numbe12312312r',
                },
            ],
        },
        {
            id: 3,
            title: 'Third',
            cards: [
                {
                    id: 1,
                    question: 'strin3f',
                    answer: 'string|numbessssssr',
                },
            ],
        },
    ],
};

const decks: Module<DecksState, RootState> = {
    state,
    getters,
    namespaced: true,
};

export default decks;
