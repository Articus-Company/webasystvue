import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const bricksItemVariants = cva('brick', {
    variants: {
        selected: { true: 'selected', false: undefined },
        accented: { true: 'accented', false: undefined },
        fullWidth: { true: 'full-width', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
        accented: undefined,
        fullWidth: undefined,
    },
})

export type BricksItemVariants = VariantProps<typeof bricksItemVariants>

export {
    default as Bricks,
    type BricksProps,
} from './Bricks.vue'
export {
    default as BricksItem,
    type BricksItemProps,
} from './BricksItem.vue'
export {
    default as BricksItemCount,
    type BricksItemCountProps,
} from './BricksItemCount.vue'
export {
    default as BricksItemIcon,
    type BricksItemIconProps,
} from './BricksItemIcon.vue'
