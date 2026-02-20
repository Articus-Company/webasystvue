<template>
    <Primitive
        :class="clsx(listItemVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ListItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { listItemVariants } from '.'

const props = defineProps<ListItemProps>()

const delegatedProps = reactiveOmit(props, 'class', 'selected')
</script>
