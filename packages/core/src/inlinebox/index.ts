import type { VariantProps } from 'class-variance-authority'
import { spaces } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const inlineboxVariants = cva('inlinebox', {
    variants: {
        space: spaces,
        baseline: { true: 'baseline', false: undefined },
        middle: { true: 'middle', false: undefined },
    },
    defaultVariants: {
        space: undefined,
        baseline: undefined,
        middle: undefined,
    },
})

export type InlineboxVariants = VariantProps<typeof inlineboxVariants>

export { default as Inlinebox } from './Inlinebox.vue'
