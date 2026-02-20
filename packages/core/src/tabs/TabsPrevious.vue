<template>
    <li
        title="←"
        :class="clsx(tabsPreviousVariants({ isActive }), props.class)"
        v-bind="delegatedProps"
    >
        <i class="fas fa-angle-left fa-3x"/>
    </li>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface TabsPreviousProps {
    class?: HTMLAttributes['class']
    isActive?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tabsPreviousVariants } from '.'

const props = defineProps<TabsPreviousProps>()

const delegatedProps = reactiveOmit(props, 'class', 'isActive')
</script>
