<template>
    <ul
        v-bind="delegatedProps"
        :class="clsx(tabsVariants({
            size,
            borderedBottom,
            overflowDropdown,
            overflowArrows,
        }), props.class)"
    >
        <slot/>
    </ul>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TabsVariants } from '.'

export interface TabsProps {
    class?: HTMLAttributes['class']
    size?: TabsVariants['size']
    borderedBottom?: boolean
    overflowDropdown?: boolean
    overflowArrows?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tabsVariants } from '.'

const props = defineProps<TabsProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'size',
    'borderedBottom',
    'overflowDropdown',
    'overflowArrows',
)
</script>
