<template>
    <Primitive
        as="th"
        :class="clsx(tableHeadVariants({
            align,
            verticalAlign,
            minWidth,
            maxWidth,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { TableHeadVariants } from '@/table/index.ts'

export interface TableHeadProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    align?: TableHeadVariants['align']
    verticalAlign?: TableHeadVariants['verticalAlign']
    minWidth?: boolean
    maxWidth?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { tableHeadVariants } from '.'

const props = defineProps<TableHeadProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'align',
    'verticalAlign',
    'minWidth',
    'maxWidth',
)
</script>
