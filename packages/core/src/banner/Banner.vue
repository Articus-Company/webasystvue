<template>
    <Primitive
        :class="clsx(bannerVariants({ static }), props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface BannerProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
    static?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { bannerVariants } from '.'

const props = defineProps<BannerProps>()

const delegatedProps = reactiveOmit(props, 'class', 'static')
</script>
