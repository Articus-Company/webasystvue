<template>
    <Primitive
        :class="clsx(boxVariants({ contentbox, rounded, uploadbox }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BoxProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    contentbox?: boolean
    rounded?: boolean
    uploadbox?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { boxVariants } from '.'

const props = defineProps<BoxProps>()

const delegatedProps = reactiveOmit(props, 'class', 'contentbox', 'rounded', 'uploadbox')
</script>
