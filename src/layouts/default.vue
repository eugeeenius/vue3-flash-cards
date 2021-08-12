<template>
    <div class="DefaultLayout">
        <v-app>
            <v-app-bar class="px-6"
                       color="primary">
                <v-app-bar-nav-icon color="primary"
                                    @click="drawer = !drawer" />
                <v-app-bar-title>Flashcards App</v-app-bar-title>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer"
                                 color="accent">
                <v-list>
                    <v-list-item v-for="item in items"
                                 :to="item.route"
                                 router>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-icon class="ps-4">{{ item.icon }}</v-icon>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <slot />
            </v-main>
        </v-app>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'DefaultLayout',

        data() {
            return {
                drawer: false,
                items: [
                    {
                        title: 'Decks',
                        icon: 'mdi-cards',
                        route: '/'
                    },
                    {
                        title: 'Create Deck',
                        icon: 'mdi-card-plus',
                        route: '/create'
                    }
                ]
            };
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
