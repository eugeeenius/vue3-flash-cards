<template>
    <div class="container">
        <div v-if="isDeckListEmpty">Decks List is empty</div>

        <template v-else>
            <div class="v-input v-input--dirty v-input--variant-filled v-theme--light v-input--density-default">
                <div class="v-input__control">
                    <div class="v-input__overlay"></div>

                    <div class="v-input__field">
                        <input v-model="text"
                               type="text"
                               class="pa-0 px-6"
                               @input="onInput">
                    </div>

                    <div class="v-input__outline"></div>
                </div>

                <transition name="fade-fast">
                    <v-btn v-show="text"
                           class="clear"
                           flat
                           icon
                           @click="clearSearch">
                        <v-icon class="text-grey-darken-1"
                                size="x-small">mdi-close</v-icon>
                    </v-btn>
                </transition>
            </div>

            <transition-group tag="div"
                              name="bottom-appear">
                <DeckCard
                    v-for="deck in filteredDecks"
                    :key="deck.id"
                    class="deck"
                    :deck="deck"
                />
            </transition-group>
        </template>
    </div>
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
        const text = ref<string>('');

        const filterDecks = (e: Event): void => {
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

        const clearSearch = () => {
            text.value = '';
            filteredDecks.value = [];
        };

        return {
            isDeckListEmpty: computed(() => store.getters['decks/isDecksListEmpty']),
            filteredDecks,
            text,
            onInput: filterDecks,
            clearSearch,
        };
    },
});
</script>

<style lang="less" scoped>
    .container {
        padding: 0 220px;
    }

    .deck:not(:first-child) {
        margin-top: 20px;
    }

    .v-input {
        position: relative;
        margin-bottom: 40px;
    }

    .clear {
        position: absolute;
        top: 50%;
        right: 24px;
        width: 24px;
        height: 24px;
        transform: translate3d(0, -50%, 0);
        cursor: pointer;
    }
</style>
