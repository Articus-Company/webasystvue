import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const headingVariants = cva('heading', {
    variants: {
        black: { true: 'black', false: undefined },
    },
    defaultVariants: {
        black: undefined,
    },
})

export type HeadingVariants = VariantProps<typeof headingVariants>

export const headingItemVariants = cva('', {
    variants: {
        action: { true: 'action', false: undefined },
        count: { true: 'count', false: undefined },
    },
    defaultVariants: {
        action: undefined,
        count: undefined,
    },
})

export type HeadingItemVariants = VariantProps<typeof headingItemVariants>

export { default as Heading } from './Heading.vue'
export { default as HeadingCaret } from './HeadingCaret.vue'
export { default as HeadingItem } from './HeadingItem.vue'
