<template>
    <Primitive
        as="tr"
        :class="clsx(tableRowVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface TableRowProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { tableRowVariants } from '.'

const props = defineProps<TableRowProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'selected',
)
</script>
