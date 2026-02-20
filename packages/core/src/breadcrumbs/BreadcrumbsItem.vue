<template>
    <Primitive
        :class="clsx(breadcrumbsItemVariants({ active }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BreadcrumbsItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    active?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { breadcrumbsItemVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbsItemProps>(), {
    as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class', 'active')
</script>
