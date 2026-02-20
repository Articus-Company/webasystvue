<template>
    <Primitive
        :class="clsx(buttonVariants({
            color,
            size,
            outlined,
            rounded,
            nobutton,
            fullWidth,
            gradient,
            circle,
            disabled,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '.'

export interface BadgeProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    color?: ButtonVariants['color']
    size?: ButtonVariants['size']
    outlined?: boolean
    rounded?: boolean
    nobutton?: boolean
    fullWidth?: boolean
    gradient?: boolean
    circle?: boolean
    disabled?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { buttonVariants } from '.'

const props = withDefaults(defineProps<BadgeProps>(), {
    as: 'button',
})

const delegatedProps = reactiveOmit(
    props,
    'class',
    'size',
    'color',
    'outlined',
    'rounded',
    'nobutton',
    'fullWidth',
    'gradient',
    'circle',
)
</script>
