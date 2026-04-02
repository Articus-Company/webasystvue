<template>
    <Primitive
        as="li"
        :class="clsx(breadcrumbsSectionVariants({ active }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BreadcrumbsSectionProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    active?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { breadcrumbsSectionVariants } from '.'

const props = defineProps<BreadcrumbsSectionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'active')
</script>
