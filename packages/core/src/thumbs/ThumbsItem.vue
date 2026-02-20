<template>
    <li
        v-bind="delegatedProps"
        :class="clsx(thumbsItemVariants({ selected, shadowed, highlighted }), props.class)"
    >
        <slot/>
    </li>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface ThumbsItemProps {
    class?: HTMLAttributes['class']
    selected?: boolean
    shadowed?: boolean
    highlighted?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { thumbsItemVariants } from '.'

const props = defineProps<ThumbsItemProps>()

const delegatedProps = reactiveOmit(props, 'class', 'selected', 'shadowed', 'highlighted')
</script>
