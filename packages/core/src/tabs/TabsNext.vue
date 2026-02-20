<template>
    <li
        title="→"
        :class="clsx(tabsNextVariants({ isActive }), props.class)"
        v-bind="delegatedProps"
    >
        <i class="fas fa-angle-right fa-3x"/>
    </li>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface TabsNextProps {
    class?: HTMLAttributes['class']
    isActive?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tabsNextVariants } from '.'

const props = defineProps<TabsNextProps>()

const delegatedProps = reactiveOmit(props, 'class', 'isActive')
</script>
