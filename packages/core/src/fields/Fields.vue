<template>
    <Primitive
        :class="clsx(fieldsVariants({ vertical }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface FieldsProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    vertical?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { fieldsVariants } from '.'

const props = defineProps<FieldsProps>()

const delegatedProps = reactiveOmit(props, 'class', 'vertical')
</script>
