<template>
    <Primitive
        :class="clsx(fieldValueVariants({ middle, submit }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface FieldValueProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    middle?: boolean
    submit?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { fieldValueVariants } from '.'

const props = defineProps<FieldValueProps>()

const delegatedProps = reactiveOmit(props, 'class', 'middle', 'submit')
</script>
