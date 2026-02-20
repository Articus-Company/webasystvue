<template>
    <Primitive
        :class="clsx(iconVariants({
            size,
            shiftX,
            top,
            baseline,
            middle,
            userpic,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { IconVariants } from '.'

export interface IconProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: IconVariants['size']
    shiftX?: IconVariants['shiftX']
    top?: boolean
    baseline?: boolean
    middle?: boolean
    userpic?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { iconVariants } from '.'

const props = defineProps<IconProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'size',
    'shiftX',
    'top',
    'baseline',
    'middle',
    'userpic',
)
</script>
