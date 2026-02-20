import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const listItemVariants = cva('item', {
    variants: {
        selected: { true: 'selected', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
    },
})

export type ListItemVariants = VariantProps<typeof listItemVariants>

export { default as List } from './List.vue'
export { default as ListItem } from './ListItem.vue'
export { default as ListItemDetails } from './ListItemDetails.vue'
export { default as ListItemImage } from './ListItemImage.vue'
