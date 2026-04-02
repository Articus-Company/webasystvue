<template>
    <Primitive v-bind="props">
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface ThumbsItemImageProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<ThumbsItemImageProps>(), {
    as: 'a',
})
</script>
