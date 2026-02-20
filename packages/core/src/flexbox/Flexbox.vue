<template>
    <Primitive
        :class="clsx(flexboxVariants({
            space,
            middle,
            fullWidth,
            fixed,
            vertical,
            verticalMobile,
            wrap,
            wrapMobile,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { FlexboxVariants } from '.'

export interface FlexboxProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    space?: FlexboxVariants['space']
    middle?: boolean
    fullWidth?: boolean
    fixed?: boolean
    vertical?: boolean
    verticalMobile?: boolean
    wrap?: boolean
    wrapMobile?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { flexboxVariants } from '.'

const props = defineProps<FlexboxProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'space',
    'middle',
    'fullWidth',
    'fixed',
    'vertical',
    'verticalMobile',
    'wrap',
    'wrapMobile',
)
</script>
