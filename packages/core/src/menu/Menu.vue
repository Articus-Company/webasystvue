<template>
    <ul
        :class="clsx(menuVariants({ ellipsis, breakWords, large, mobileFriendly }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </ul>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface MenuProps {
    class?: HTMLAttributes['class']
    ellipsis?: boolean
    breakWords?: boolean
    large?: boolean
    mobileFriendly?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { menuVariants } from '.'

const props = defineProps<MenuProps>()

const delegatedProps = reactiveOmit(props, 'class', 'ellipsis', 'breakWords', 'large', 'mobileFriendly')
</script>
