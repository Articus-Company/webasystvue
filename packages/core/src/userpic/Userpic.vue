<template>
    <Primitive
        :class="clsx(userpicVariants({ size, outlined }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { UserpicVariants } from '@/userpic/index.ts'

export interface UserpicProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    size?: UserpicVariants['size']
    outlined?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { userpicVariants } from '@/userpic/index.ts'

const props = defineProps<UserpicProps>()

const delegatedProps = reactiveOmit(props, 'class', 'size', 'outlined')
</script>
