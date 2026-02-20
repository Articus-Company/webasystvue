<template>
    <Primitive
        :class="clsx(headingItemVariants({ action, count }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface HeadingItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    action?: boolean
    count?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { headingItemVariants } from '.'

const props = withDefaults(defineProps<HeadingItemProps>(), {
    as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class', 'action', 'count')
</script>
