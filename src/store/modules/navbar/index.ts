import { Module, ActionContext } from 'vuex';
import { RootState } from '@/store/types';
import { NavbarState } from '@/store/modules/navbar/types';

const navbar: Module<NavbarState, RootState> = {
    state: () => ({
        isOpen: false,
    }),

    actions: {
        toggleNavbar(ctx: ActionContext<NavbarState, RootState>) {
            ctx.commit('SET_NAVBAR_STATE');
        },
    },

    mutations: {
        SET_NAVBAR_STATE(state) {
            state.isOpen = !state.isOpen;
        },
    },

    getters: {
        getNavbarState: (state) => state.isOpen,
    },

    namespaced: true,
};

export default navbar;
