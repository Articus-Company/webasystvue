import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const pagingItemVariants = cva('', {
    variants: {
        selected: { true: 'selected', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
    },
})

export type PagingItemVariants = VariantProps<typeof pagingItemVariants>

export { default as Paging } from './Paging.vue'
export { default as PagingItem } from './PagingItem.vue'
