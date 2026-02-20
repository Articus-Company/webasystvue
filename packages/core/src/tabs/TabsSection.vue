<template>
    <li
        :class="clsx(tabsSectionVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </li>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface TabsProps {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { tabsSectionVariants } from '.'

const props = defineProps<TabsProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'selected',
)
</script>
