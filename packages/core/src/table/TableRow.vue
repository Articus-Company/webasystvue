<template>
    <tr
        :class="clsx(tableRowVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </tr>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface TableRowProps {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tableRowVariants } from '.'

const props = defineProps<TableRowProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'selected',
)
</script>
