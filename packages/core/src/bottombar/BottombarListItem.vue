<template>
    <Primitive
        :class="clsx(bottombarListItemVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BottombarListItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { bottombarListItemVariants } from '.'

const props = withDefaults(defineProps<BottombarListItemProps>(), {
    as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class', 'selected')
</script>
