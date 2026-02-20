<template>
    <Primitive
        :class="clsx(alertVariants({ size, type }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { AlertVariants } from '.'

export interface AlertProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: AlertVariants['size']
    type?: AlertVariants['type']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { alertVariants } from '.'

const props = withDefaults(defineProps<AlertProps>(), {
    as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class', 'size', 'type')
</script>
