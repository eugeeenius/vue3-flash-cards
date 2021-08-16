<template>
    <DeckCard v-if="deck" :deck="deck"/>
    <div v-else>Deck not found</div>
</template>

<script lang="ts">
import {
    computed,
    ComputedRef,
    defineComponent,
    ref,
    watch,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

import { Deck } from '@/models/Deck';

import DeckCard from '@/components/DeckCard.vue';

export default defineComponent({
    components: { DeckCard },

    setup() {
        const store = useStore();
        const route = useRoute();

        const getDeckFromStore = (id: number | string): ComputedRef<Deck | undefined> => computed(() => store.getters['decks/getDeckById'](id));

        const deckId = computed(() => Number(route.params.id));

        const deck = ref<Deck | undefined >(getDeckFromStore(deckId.value).value);

        watch(() => deckId.value, (newValue) => {
            deck.value = getDeckFromStore(newValue).value;
        });

        return { deck };
    },
});
</script>
