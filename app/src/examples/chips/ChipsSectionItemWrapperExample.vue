<template>
    <ChipsSection v-bind="props">
        <ChipsItem>
            <slot/>
        </ChipsItem>
    </ChipsSection>
</template>

<script setup lang="ts">
import type { ChipsSectionProps } from 'webasystvue'
import { ChipsItem, ChipsSection } from 'webasystvue'

const props = defineProps<ChipsSectionProps>()
</script>
