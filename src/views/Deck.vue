<template>
    <div v-if="isDeckListEmpty">Decks List is empty</div>

    <template v-else>
        <div class="v-input v-input--dirty v-input--variant-filled v-theme--light v-input--density-default">
            <div class="v-input__control">
                <div class="v-input__overlay"></div>

                <div class="v-input__field">
                    <input type="text"
                           class="pa-0 px-6"
                           @change="onChange">
                </div>

                <div class="v-input__outline"></div>
            </div>
        </div>

        <transition-group name="bottom-appear">
            <DeckCard
                v-for="deck in filteredDecks"
                :key="deck.id"
                :deck="deck"
            />
        </transition-group>
    </template>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    ref,
} from 'vue';
import { useStore } from 'vuex';

import { Deck } from '@/models/Deck';

import DeckCard from '@/components/DeckCard.vue';

export default defineComponent({
    components: { DeckCard },

    setup() {
        const store = useStore();
        const decks = computed(() => store.getters['decks/getDecksList']);

        const filteredDecks = ref<Deck[]>(decks.value);

        const filterDecks = (e: Event) => {
            filteredDecks.value = [];

            setTimeout(() => {
                const input = e.target as HTMLInputElement;
                const value = input.value.trim();

                if (!value) {
                    filteredDecks.value = decks.value;
                    return;
                }

                filteredDecks.value = decks.value.filter((deck: Deck) => deck.title.toLowerCase().includes(value));
            }, 400);
        };

        return {
            isDeckListEmpty: computed(() => store.getters['decks/isDecksListEmpty']),
            onChange: filterDecks,
            filteredDecks,
        };
    },
});
</script>
