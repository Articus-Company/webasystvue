<template>
    <Primitive
        :class="clsx(inlineboxVariants({ space, baseline, middle }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { InlineboxVariants } from '.'

export interface InlineboxProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    space?: InlineboxVariants['space']
    baseline?: boolean
    middle?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { inlineboxVariants } from '.'

const props = defineProps<InlineboxProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'space',
    'baseline',
    'middle',
)
</script>
