<template>
    <v-list-item class="pr-10"
                 :to="item.route"
                 router>
        <v-list-item-title>{{ item.title }}</v-list-item-title>

        <v-icon v-if="item.icon"
                class="ml-auto">{{ item.icon }}</v-icon>
    </v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuItem } from '@/models/menu/MenuItem';

export default defineComponent({
    name: 'NavbarMenuItem',

    props: {
        item: {
            type: Object as PropType<MenuItem>,
            required: true,
        },
    },
});
</script>
