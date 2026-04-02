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

export {
    default as Heading,
    type HeadingProps,
} from './Heading.vue'
export {
    default as HeadingCaret,
    type HeadingCaretProps,
} from './HeadingCaret.vue'
export {
    default as HeadingItem,
    type HeadingItemProps,
} from './HeadingItem.vue'
