<template>
    <Primitive
        as="ul"
        :class="clsx('breadcrumbs', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BreadcrumbsProps extends Omit<PrimitiveProps, 'as'> {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<BreadcrumbsProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
