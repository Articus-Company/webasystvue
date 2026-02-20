<template>
    <Primitive
        :class="clsx(skeletonCustomCircleVariants({ size }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { SkeletonCustomCircleVariants } from '.'

export interface SkeletonProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: SkeletonCustomCircleVariants['size']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { skeletonCustomCircleVariants } from '.'

const props = defineProps<SkeletonProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
