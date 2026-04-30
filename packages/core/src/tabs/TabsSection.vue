<template>
    <Primitive
        as="li"
        :class="clsx(tabsSectionVariants({ selected }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface TabsSectionProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
    selected?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { tabsSectionVariants } from '.'

const props = defineProps<TabsSectionProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'selected',
)
</script>
