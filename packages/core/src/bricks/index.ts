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

export { default as Bricks } from './Bricks.vue'
export { default as BricksItem } from './BricksItem.vue'
export { default as BricksItemCount } from './BricksItemCount.vue'
export { default as BricksItemIcon } from './BricksItemIcon.vue'
