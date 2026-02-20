<template>
    <table
        :class="clsx(tableVariants({
            size,
            bigdata,
            zebra,
            bordered,
            borderless,
            singleLined,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </table>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TableVariants } from '.'

export interface TableProps {
    class?: HTMLAttributes['class']
    size?: TableVariants['size']
    bigdata?: boolean
    zebra?: boolean
    bordered?: boolean
    borderless?: boolean
    singleLined?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tableVariants } from '.'

const props = defineProps<TableProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'size',
    'bigdata',
    'zebra',
    'bordered',
    'borderless',
    'singleLined',
)
</script>
