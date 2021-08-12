<template>
    <VLayout>
        <VNavigationDrawer v-model="drawer"
                           :mini-variant="!isSidebarOpen"
                           permanent>
            <VListItem class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>John Leider</v-list-item-title>

                <VBtn icon
                      @click.stop="isSidebarOpen = !isSidebarOpen">
                    <VIcon>mdi-chevron-left</VIcon>
                </VBtn>
            </VListItem>

            <VList dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </VList>
        </VNavigationDrawer>
    </VLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',

    data() {
        return {
            drawer: true,
            isSidebarOpen: true,
            items: [
                { title: 'Decks', icon: 'mdi-account' },
                { title: 'Create Deck', icon: 'mdi-account-group-outline' },
            ],
        };
    },

    watch: {
        isSidebarOpen(newValue) {
            if (newValue) console.log('open');
        },
    },
});
</script>
