<template>
    <Primitive
        :class="clsx(articleVariants({ shadowed, wide, wider }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ArticleProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    shadowed?: boolean
    wide?: boolean
    wider?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { articleVariants } from '.'

const props = defineProps<ArticleProps>()

const delegatedProps = reactiveOmit(props, 'class', 'shadowed', 'wide', 'wider')
</script>
