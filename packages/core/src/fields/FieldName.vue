<template>
    <Primitive
        :class="clsx(fieldNameVariants({ forInput, forButton, forCheckbox, forSwitch, middle }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface FieldNameProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    forInput?: boolean
    forButton?: boolean
    forCheckbox?: boolean
    forSwitch?: boolean
    middle?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { fieldNameVariants } from '.'

const props = defineProps<FieldNameProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'forInput',
    'forButton',
    'forCheckbox',
    'forSwitch',
    'middle',
)
</script>
