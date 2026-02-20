<template>
    <Primitive
        :class="clsx(bricksItemVariants({ selected, accented, fullWidth }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BricksItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    selected?: boolean
    accented?: boolean
    fullWidth?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { bricksItemVariants } from '.'

const props = defineProps<BricksItemProps>()

const delegatedProps = reactiveOmit(props, 'class', 'selected', 'accented', 'fullWidth')
</script>
