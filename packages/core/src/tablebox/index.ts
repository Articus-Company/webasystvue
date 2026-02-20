import type { VariantProps } from 'class-variance-authority'
import { spaces } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const tableboxVariants = cva('tablebox', {
    variants: {
        space: spaces,
        fixed: { true: 'fixed', false: undefined },
        middle: { true: 'middle', false: undefined },

    },
    defaultVariants: {
        space: undefined,
        fixed: undefined,
        middle: undefined,
    },
})

export type TableboxVariants = VariantProps<typeof tableboxVariants>

export { default as Tablebox } from './Tablebox.vue'
export { default as TableboxMiddle } from './TableboxMiddle.vue'
