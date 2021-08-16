<template>
    <DeckCard v-if="deck" :deck="deck"/>
    <div v-else>Deck not found</div>
</template>

<script lang="ts">
import {
    computed,
    ComputedRef,
    defineComponent, PropType,
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

        const deck = ref<Deck | undefined>();

        const getDeckFromStore = function getDeckById(id: number | string):
            ComputedRef<Deck | undefined> {
            return computed(() => store.getters['decks/getDeckById'](id));
        };

        watch(() => route.params.id, (newValue) => {
            deck.value = getDeckFromStore(Number(newValue)).value;
        });

        return { deck };
    },

});
</script>
