<template>
    <td
        :class="clsx(tableCellVariants({
            align,
            verticalAlign,
            minWidth,
            maxWidth,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </td>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TableCellVariants } from '@/table/index.ts'

export interface TableCellProps {
    class?: HTMLAttributes['class']
    align?: TableCellVariants['align']
    verticalAlign?: TableCellVariants['verticalAlign']
    minWidth?: boolean
    maxWidth?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tableCellVariants } from '.'

const props = defineProps<TableCellProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'align',
    'verticalAlign',
    'minWidth',
    'maxWidth',
)
</script>
