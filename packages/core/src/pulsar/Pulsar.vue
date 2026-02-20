<template>
    <Primitive
        :class="clsx('pulsar', props.class)"
        v-bind="delegatedProps"
        as-child
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface PulsarProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<PulsarProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
