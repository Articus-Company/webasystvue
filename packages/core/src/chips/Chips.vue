<template>
    <Primitive
        as="ul"
        :class="clsx(chipsVariants({ size, outlined, rounded, transparent, tags }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ChipsVariants } from '@/chips/index.ts'

export interface ChipsProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    size?: ChipsVariants['size']
    outlined?: boolean
    rounded?: boolean
    transparent?: boolean
    tags?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { chipsVariants } from '@/chips/index.ts'

const props = defineProps<ChipsProps>()

const delegatedProps = reactiveOmit(props, 'class', 'size', 'outlined', 'rounded', 'transparent', 'tags')
</script>
