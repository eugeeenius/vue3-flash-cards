<template>
    <v-navigation-drawer :model-value="isOpen"
                         color="accent"
                         temporary>
        <v-list-item>
            <v-btn class="ml-auto"
                   color="primary"
                   icon
                   @click="toggleNavbar">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-list>
            <NavbarMenuItem
                v-for="item in items"
                :key="item.title"
                :item="item"
                @click="toggleDialog(item.group)"
            />
        </v-list>
    </v-navigation-drawer>

    <NavbarSelectDialog :is-open="isDialogOpen"
                        @on-close="toggleDialog">
        <v-list v-if="dialogItems">
            <NavbarMenuItem
                v-for="item in dialogItems"
                :key="item.title"
                :item="item"
            />
        </v-list>
    </NavbarSelectDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapGetters, useStore } from 'vuex';

import { MenuItem } from '@/models/menu/MenuItem';
import { NestedMenuItem } from '@/models/menu/NestedMenuItem';

import NavbarMenuItem from '@/components/layout/navbar/NavbarMenuItem.vue';
import NavbarSelectDialog from '@/components/layout/navbar/NavbarSelectDialog.vue';

export default defineComponent({
    name: 'Navbar',

    components: { NavbarSelectDialog, NavbarMenuItem },

    setup() {
        const store = useStore();

        const items: (MenuItem|NestedMenuItem)[] = [
            {
                title: 'Decks',
                group: store.getters['decks/getNavbarDecksList'],
            },
            {
                title: 'Create Deck',
                icon: 'mdi-card-plus',
                route: '/create',
            },
        ];

        const dialogItems = ref<MenuItem[] | null>(null);
        const isDialogOpen = ref<boolean>(false);

        const toggleDialog = (group: MenuItem[] | undefined) => {
            if (group === undefined) {
                isDialogOpen.value = false;
                return;
            }
            dialogItems.value = group;
            isDialogOpen.value = true;
        };

        return {
            items,
            dialogItems,
            isDialogOpen,
            toggleDialog,
        };
    },

    data() {
        return {
            drawer: false,
        };
    },

    computed: {
        ...mapGetters({
            isOpen: 'navbar/getNavbarState',
        }),
    },

    watch: {
        isOpen(newValue) {
            this.drawer = newValue;
        },
    },

    methods: {
        ...mapActions({
            toggleNavbar: 'navbar/toggleNavbar',
        }),
    },
});
</script>

<style lang="less" scoped>
    .menu-item {
        display: inline-flex;
        text-decoration: none;
    }
</style>
