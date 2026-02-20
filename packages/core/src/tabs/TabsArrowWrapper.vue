<template>
    <ul
        :class="clsx(tabsArrowWrapperVariants({ space, inlinebox, right, left }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </ul>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TabsArrowWrapperVariants } from '.'

export interface TabsWrapperArrowsProps {
    class?: HTMLAttributes['class']
    space?: TabsArrowWrapperVariants['space']
    inlinebox?: boolean
    right?: boolean
    left?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tabsArrowWrapperVariants } from '.'

const props = withDefaults(defineProps<TabsWrapperArrowsProps>(), {
    space: '8',
    inlinebox: true,
})

const delegatedProps = reactiveOmit(props, 'class', 'space', 'inlinebox', 'right', 'left')
</script>
