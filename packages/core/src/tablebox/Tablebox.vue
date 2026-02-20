<template>
    <Primitive
        :class="clsx(tableboxVariants({ space, fixed, middle }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { TableboxVariants } from '@/tablebox/index.ts'

export interface TableboxProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    space?: TableboxVariants['space']
    fixed?: boolean
    middle?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { tableboxVariants } from '@/tablebox/index.ts'

const props = defineProps<TableboxProps>()

const delegatedProps = reactiveOmit(props, 'class', 'space', 'fixed', 'middle')
</script>
