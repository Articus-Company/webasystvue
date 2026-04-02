<template>
    <Primitive
        as="li"
        :class="clsx(chipsSectionVariants({
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
import type { ChipsSectionVariants } from '.'

export interface ChipsSectionProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    size?: ChipsSectionVariants['size']
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
import { chipsSectionVariants } from '.'

const props = defineProps<ChipsSectionProps>()

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
