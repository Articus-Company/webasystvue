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

export {
    default as List,
    type ListProps,
} from './List.vue'
export {
    default as ListItem,
    type ListItemProps,
} from './ListItem.vue'
export {
    default as ListItemDetails,
    type ListItemDetailsProps,
} from './ListItemDetails.vue'
export {
    default as ListItemImage,
    type ListItemImageProps,
} from './ListItemImage.vue'
