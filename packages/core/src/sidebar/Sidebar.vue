<template>
    <Primitive
        :class="clsx(sidebarVariants({
            width,
            flexbox,
            overflowVisible,
            scrollsWithContent,
            right,
            rail,
            heightAuto,
            mobileFriendly,
        }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { SidebarVariants } from '.'

export interface SidebarProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    width?: SidebarVariants['width']
    flexbox?: boolean
    overflowVisible?: boolean
    scrollsWithContent?: boolean
    right?: boolean
    rail?: boolean
    heightAuto?: boolean
    mobileFriendly?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { sidebarVariants } from '.'

const props = defineProps<SidebarProps>()

const delegatedProps = reactiveOmit(
    props,
    'class',
    'width',
    'flexbox',
    'overflowVisible',
    'scrollsWithContent',
    'right',
    'rail',
    'heightAuto',
    'mobileFriendly',
)
</script>
