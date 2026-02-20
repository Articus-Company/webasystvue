<template>
    <Primitive
        :class="clsx(menuItemCountVariants({ action }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface MenuItemCountProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    action?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { menuItemCountVariants } from '.'

const props = withDefaults(defineProps<MenuItemCountProps>(), {
    as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class', 'action')
</script>
