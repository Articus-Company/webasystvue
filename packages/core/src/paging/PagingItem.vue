<template>
    <Primitive
        :class="clsx(pagingItemVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface PagingItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { pagingItemVariants } from '.'

const props = withDefaults(defineProps<PagingItemProps>(), {
    as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class', 'selected')
</script>
