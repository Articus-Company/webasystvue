<template>
    <Primitive
        :class="clsx(articleHeaderVariants({ fullWidth }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ArticleFooterProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    fullWidth?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { articleHeaderVariants } from '.'

const props = defineProps<ArticleFooterProps>()

const delegatedProps = reactiveOmit(props, 'class', 'fullWidth')
</script>
