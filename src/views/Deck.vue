<template>
    <div v-if="isDeckListEmpty">Decks List is empty</div>

    <template v-else>
        <DeckCard
            v-for="deck in decks"
            :key="deck.id"
            :deck="deck"
        />
    </template>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
} from 'vue';

import { useStore } from 'vuex';

import DeckCard from '@/components/DeckCard.vue';

export default defineComponent({
    components: { DeckCard },

    setup() {
        const store = useStore();

        return {
            isDeckListEmpty: computed(() => store.getters['decks/isDecksListEmpty']),
            decks: computed(() => store.getters['decks/getDecksList']),
        };
    },
});
</script>
