import { createStore } from 'vuex';
import navbar from '@/store/modules/navbar/index';

export default createStore({
    state: {
        darkMode: false,
    },
    modules: {
        navbar,
    },
});
