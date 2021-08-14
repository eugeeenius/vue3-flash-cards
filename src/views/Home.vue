<template>
    <v-spacer class="pt-6"></v-spacer>

    <div class="wrap">
<!--        <div v-for="deck in decks"-->
<!--             class="card">-->
<!--            <v-card height="424px">-->
<!--                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"-->
<!--                       height="200px"></v-img>-->

<!--                <v-card-title>-->
<!--                    Top western road trips-->
<!--                </v-card-title>-->

<!--                <v-card-subtitle>-->
<!--                    1,000 miles of wonder-->
<!--                </v-card-subtitle>-->
<!--            </v-card>-->
<!--        </div>-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',

    setup() {
        // const decks = ref<Deck[]>([
        //     {
        //         id: 25,
        //         title: '33',
        //         cards: [
        //             { id: 22, question: '?', answer: '!' },
        //             { id: 23, question: 'A?', answer: 'Lorem ipsum dolor sit amet' },
        //         ],
        //     },
        // ]);
        //
        // return { decks };
    },
});
</script>

<style lang="less" scoped>

</style>
