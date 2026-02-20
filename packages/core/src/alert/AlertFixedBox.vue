<template>
    <Primitive
        :class="clsx(alertFixedBoxVariants({ bottom, large }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AlertFixedBoxProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    bottom?: boolean
    large?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { alertFixedBoxVariants } from '.'

const props = defineProps<AlertFixedBoxProps>()

const delegatedProps = reactiveOmit(props, 'class', 'bottom', 'large')
</script>
