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

export {
    default as Paging,
    type PagingProps,
} from './Paging.vue'
export {
    default as PagingItem,
    type PagingItemProps,
} from './PagingItem.vue'
