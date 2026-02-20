import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const thumbsItemsSizes = {
    '50': 'li50px',
    '100': 'li100px',
    '150': 'li150px',
    '200': 'li200px',
    '250': 'li250px',
    '300': 'li300px',
    '350': 'li350px',
} as const

export const thumbsVariants = cva('thumbs', {
    variants: {
        size: thumbsItemsSizes,
    },
    defaultVariants: {
        size: undefined,
    },
})

export type ThumbsVariants = VariantProps<typeof thumbsVariants>

export const thumbsItemVariants = cva('', {
    variants: {
        selected: { true: 'selected', false: undefined },
        shadowed: { true: 'shadowed', false: undefined },
        highlighted: { true: 'highlighted', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
        shadowed: undefined,
        highlighted: undefined,
    },
})

export type ThumbsItemVariants = VariantProps<typeof thumbsItemVariants>

export { default as Thumbs } from './Thumbs.vue'
export { default as ThumbsItem } from './ThumbsItem.vue'
export { default as ThumbsItemImage } from './ThumbsItemImage.vue'
