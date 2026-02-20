<template>
    <li
        :class="clsx(menuSectionVariants({ selected, accented, rounded, topPadded, bottomPadded }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </li>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface MenuSectionProps {
    class?: HTMLAttributes['class']
    selected?: boolean
    accented?: boolean
    rounded?: boolean
    topPadded?: boolean
    bottomPadded?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { menuSectionVariants } from '.'

const props = defineProps<MenuSectionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'selected', 'accented', 'rounded', 'topPadded', 'bottomPadded')
</script>
