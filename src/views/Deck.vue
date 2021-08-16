<template>
    <div v-if="isDeckListEmpty">Decks List is empty</div>
    <DeckCard v-else-if="deck" :deck="deck" />
    <div v-else>Deck not found</div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    ref,
    watch,
} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import { Deck } from '@/models/Deck';

import DeckCard from '@/components/DeckCard.vue';

export default defineComponent({
    components: { DeckCard },

    setup() {
        const store = useStore();
        const route = useRoute();

        const isDeckListEmpty = computed(() => store.getters['decks/isDecksListEmpty']).value;
        const deck = ref<Deck | undefined>();

        if (isDeckListEmpty) {
            return {
                deck,
                isDeckListEmpty,
            };
        }

        const deckId = computed(() => Number(route.params.id));
        deck.value = computed(() => store.getters['decks/getDeckById'](deckId.value)).value;

        watch(() => deckId.value, (newValue) => {
            deck.value = computed(() => store.getters['decks/getDeckById'](newValue)).value;
        });

        return {
            deck,
            isDeckListEmpty,
        };
    },
});
</script>
