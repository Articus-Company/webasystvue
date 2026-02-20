<template>
    <Primitive
        :class="clsx('icon', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface MenuItemIconProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<MenuItemIconProps>(), {
    as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
