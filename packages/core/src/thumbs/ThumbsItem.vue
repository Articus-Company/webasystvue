<template>
    <Primitive
        as="li"
        v-bind="delegatedProps"
        :class="clsx(thumbsItemVariants({ selected, shadowed, highlighted }), props.class)"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ThumbsItemProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    selected?: boolean
    shadowed?: boolean
    highlighted?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { thumbsItemVariants } from '.'

const props = defineProps<ThumbsItemProps>()

const delegatedProps = reactiveOmit(props, 'class', 'selected', 'shadowed', 'highlighted')
</script>
