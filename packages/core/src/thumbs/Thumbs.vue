<template>
    <Primitive
        as="ul"
        v-bind="delegatedProps"
        :class="clsx(thumbsVariants({ size }), props.class)"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ThumbsVariants } from '.'

export interface ThumbsProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    size?: ThumbsVariants['size']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { thumbsVariants } from '.'

const props = defineProps<ThumbsProps>()

const delegatedProps = reactiveOmit(props, 'class', 'size')
</script>
