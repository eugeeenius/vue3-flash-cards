<template>
    <v-dialog v-model="dialog"
              scrollable
              @update:modelValue="$emit('on-close')">
        <v-card width="400px">
            <v-card-title>Select Deck</v-card-title>

            <v-divider></v-divider>

            <div class="content">
                <slot />
            </div>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn color="blue darken-1"
                    text
                    @click="$emit('on-close')">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
    ref,
    watch,
} from 'vue';

export default defineComponent({
    props: {
        isOpen: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },

    emits: ['on-close'],

    setup(props) {
        const dialog = ref<boolean>(props.isOpen);

        watch(() => props.isOpen, (value) => {
            dialog.value = value;
        });

        return { dialog };
    },
});
</script>

<style lang="less" scoped>
    .NavbarSelectDialog {
        position: absolute;
    }

    .content {
        height: 300px;
        padding: 0;
    }
</style>
