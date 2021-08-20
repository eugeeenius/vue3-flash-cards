<template>
    <v-card class="DeckCard">
        <v-card-header-text class="px-10 py-6 d-flex justify-space-between">
            <h3>{{ deck.title }}</h3>

            <button class="edit text-grey-darken-1">
                <span>Edit</span>

                <v-icon size="small">mdi-pencil</v-icon>
            </button>
        </v-card-header-text>

        <v-divider />

        <v-card-text class="d-flex justify-space-between">
            <v-row class="px-10 py-6">
                <v-col class="p-0">
                    <div>
                        Flashcards <v-icon>mdi-cards</v-icon>
                    </div>

                    <span class="ml-8 font-weight-bold">{{ deck.cards.length }}</span>
                </v-col>
            </v-row>

            <v-card-actions class="px-10">
                <v-btn class="ml-auto" @click="onClick">Learn</v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

import { Deck } from '@/models/Deck';

export default defineComponent({
    props: {
        deck: {
            type: Object as PropType<Deck>,
            required: true,
        },
    },

    setup(props) {
        const router = useRouter();
        const changeRoute = () => {
            router.push(String(props.deck.id));
        };

        return {
            onClick: changeRoute,
        };
    },
});
</script>

<style lang="less" scoped>
    .DeckCard {
        width: 100%;
        border-radius: 20px;
    }

    .edit {
        display: inline-flex;
        align-items: center;

        span {
            margin-right: 4px;
        }
    }
</style>
