<template>
    <Primitive
        :class="clsx(chipsItemVariants({
            size,
            outlined,
            rounded,
            transparent,
            tag,
            accented,
            selected,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ChipsVariants } from '.'

export interface ChipsItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: ChipsVariants['size']
    outlined?: boolean
    rounded?: boolean
    transparent?: boolean
    tag?: boolean
    accented?: boolean
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { chipsItemVariants } from '.'

const props = withDefaults(defineProps<ChipsItemProps>(), {
    as: 'li',
})

const delegatedProps = reactiveOmit(
    props,
    'class',
    'size',
    'outlined',
    'rounded',
    'transparent',
    'tag',
    'accented',
    'selected',
)
</script>
