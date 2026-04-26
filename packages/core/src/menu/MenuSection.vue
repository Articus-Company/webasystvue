<template>
    <Primitive
        as="li"
        :class="clsx(menuSectionVariants({ selected, accented, rounded, topPadded, bottomPadded }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface MenuSectionProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    selected?: boolean
    accented?: boolean
    rounded?: boolean
    topPadded?: boolean
    bottomPadded?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { menuSectionVariants } from '.'

const props = defineProps<MenuSectionProps>()

const delegatedProps = reactiveOmit(props, 'class', 'selected', 'accented', 'rounded', 'topPadded', 'bottomPadded')
</script>
