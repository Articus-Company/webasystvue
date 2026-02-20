<template>
    <Primitive v-bind="props">
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<PrimitiveProps>(), {
    as: 'a',
})
</script>
