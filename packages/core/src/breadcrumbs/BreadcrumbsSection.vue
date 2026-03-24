<template>
    <li
        :class="clsx(breadcrumbsSectionVariants({ active }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </li>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface BreadcrumbsSectionProps {
    class?: HTMLAttributes['class']
    active?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { breadcrumbsSectionVariants } from '.'

const props = defineProps<BreadcrumbsSectionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'active')
</script>
