import { createStore } from 'vuex';
import navbar from '@/store/modules/navbar/index';
import decks from '@/store/modules/decks/index';
import { RootState } from '@/store/types';

export default createStore<RootState>({
    state: {
        darkMode: false,
    },

    modules: {
        navbar,
        decks,
    },
});
