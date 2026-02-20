<template>
    <Primitive
        :class="clsx(badgeVariants({ size, color, user, squared }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { BadgeVariants } from '.'

export interface BadgeProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: BadgeVariants['size']
    color?: BadgeVariants['color']
    user?: boolean
    squared?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { badgeVariants } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
    as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'color', 'user', 'squared')
</script>
