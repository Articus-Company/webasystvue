import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const bottombarListItemVariants = cva('', {
    variants: {
        selected: { true: 'selected', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
    },
})

export type BottombarListItemVariants = VariantProps<typeof bottombarListItemVariants>

export {
    default as Bottombar,
    type BottombarProps,
} from './Bottombar.vue'
export {
    default as BottombarList,
} from './BottombarList.vue'
export {
    default as BottombarListItem,
    type BottombarListItemProps,
} from './BottombarListItem.vue'
