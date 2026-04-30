<template>
    <Primitive
        as="ul"
        v-bind="delegatedProps"
        :class="clsx(tabsVariants({
            size,
            borderedBottom,
            overflowDropdown,
            overflowArrows,
        }), props.class)"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { TabsVariants } from '.'

export interface TabsProps extends Omit<PrimitiveProps, 'as'> {
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
import { Primitive } from 'reka-ui'
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
