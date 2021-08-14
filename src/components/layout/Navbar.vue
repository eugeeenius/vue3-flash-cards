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
            <v-list-item v-for="item in items"
                         :key="item.title"
                         :to="item.route"
                         class="pr-10"
                         router>
                <v-list-item-title>{{ item.title }}</v-list-item-title>

                <v-icon class="ml-auto">{{ item.icon }}</v-icon>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',

    data() {
        return {
            drawer: false,
            items: [
                {
                    title: 'Decks',
                    icon: 'mdi-cards',
                    route: '/',
                },
                {
                    title: 'Create Deck',
                    icon: 'mdi-card-plus',
                    route: '/create',
                },
            ],
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
    .DefaultLayout {
        //
    }

    .menu-item {
        display: inline-flex;
        text-decoration: none;
    }
</style>
