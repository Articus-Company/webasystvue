<template>
    <HeadingCaretWrapper>
        <HeadingCaret v-bind="props">
            <slot/>
        </HeadingCaret>
    </HeadingCaretWrapper>
</template>

<script setup lang="ts">
import type { HeadingCaretProps } from 'webasystvue'
import { HeadingCaret, HeadingCaretWrapper } from 'webasystvue'

const props = defineProps<HeadingCaretProps>()
</script>
