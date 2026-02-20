<template>
    <ul
        v-bind="delegatedProps"
        :class="clsx(thumbsVariants({ size }), props.class)"
    >
        <slot/>
    </ul>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ThumbsVariants } from '.'

export interface ThumbsProps {
    class?: HTMLAttributes['class']
    size?: ThumbsVariants['size']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { thumbsVariants } from '.'

const props = defineProps<ThumbsProps>()

const delegatedProps = reactiveOmit(props, 'class', 'size')
</script>
