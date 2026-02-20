import type { VariantProps } from 'class-variance-authority'
import { spaces } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const flexboxVariants = cva('flexbox', {
    variants: {
        space: spaces,
        middle: { true: 'middle', false: undefined },
        fullWidth: { true: 'full-width', false: undefined },
        fixed: { true: 'fixed', false: undefined },
        vertical: { true: 'vertical', false: undefined },
        verticalMobile: { true: 'vertical-mobile', false: undefined },
        wrap: { true: 'wrap', false: undefined },
        wrapMobile: { true: 'wrap-mobile', false: undefined },
    },
    defaultVariants: {
        space: undefined,
        middle: undefined,
        fullWidth: undefined,
        fixed: undefined,
        vertical: undefined,
        verticalMobile: undefined,
        wrap: undefined,
        wrapMobile: undefined,
    },
})

export type FlexboxVariants = VariantProps<typeof flexboxVariants>

export { default as Flexbox } from './Flexbox.vue'
