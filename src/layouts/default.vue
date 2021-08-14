<template>
    <div class="DefaultLayout">
        <v-app>
            <Navbar />

            <v-app-bar class="px-6"
                       color="primary"
                       app>
                <v-app-bar-nav-icon color="primary"
                                    @click="toggleNavbar" />
                <v-app-bar-title>Flashcards App</v-app-bar-title>
            </v-app-bar>

            <v-main>
                <v-container>
                    <slot />
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent } from 'vue';
import Navbar from '@/components/layout/Navbar.vue';

export default defineComponent({
    name: 'DefaultLayout',

    components: { Navbar },

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
