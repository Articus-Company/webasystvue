import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const boxVariants = cva('box', {
    variants: {
        contentbox: { true: 'contentbox', false: undefined },
        rounded: { true: 'rounded', false: undefined },
        uploadbox: { true: 'uploadbox', false: undefined },
    },
    defaultVariants: {
        contentbox: undefined,
        rounded: undefined,
        uploadbox: undefined,
    },
})

export type BoxVariants = VariantProps<typeof boxVariants>

export { default as Box } from './Box.vue'
