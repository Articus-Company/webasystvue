<template>
    <Primitive
        :class="clsx(headingVariants({ black }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface HeadingProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    black?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { headingVariants } from '.'

const props = defineProps<HeadingProps>()

const delegatedProps = reactiveOmit(props, 'class', 'black')
</script>
