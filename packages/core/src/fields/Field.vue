<template>
    <Primitive
        :class="clsx(fieldVariants({ vertical }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface FieldProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    vertical?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { fieldVariants } from '.'

const props = defineProps<FieldProps>()

const delegatedProps = reactiveOmit(props, 'class', 'vertical')
</script>
