<template>
    <Primitive
        as="a"
        v-bind="props"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface ChipsItemProps extends Omit<PrimitiveProps, 'as'> {}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'

const props = defineProps<ChipsItemProps>()
</script>
