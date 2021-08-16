<template>
    <v-card class="DeckCard">
        <v-card-header-text>{{ deck.title }}</v-card-header-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Deck } from '@/models/Deck';

export default defineComponent({
    props: {
        deck: {
            type: Object as PropType<Deck>,
            required: true,
        },
    },
});
</script>

<style lang="less" scoped>
    .DeckCard {
        width: 52vw;
        height: 72vh;
        margin: 6vh auto auto;
        border-radius: 20px;
    }
</style>
