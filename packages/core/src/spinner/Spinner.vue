<template>
    <Primitive
        :class="clsx(spinnerVariants({ size }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { SpinnerVariants } from '.'

export interface SpinnerProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: SpinnerVariants['size']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { spinnerVariants } from '.'

const props = defineProps<SpinnerProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
