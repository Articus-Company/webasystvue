import type { VariantProps } from 'class-variance-authority'
import { colors, sizes } from '@lib/utils'
import { cva } from 'class-variance-authority'

const buttonColors = {
    ...colors,
    danger: 'danger',
    warning: 'warning',
    success: 'success',
} as const

export const buttonVariants = cva('button', {
    variants: {
        color: buttonColors,
        size: sizes,
        outlined: { true: 'outlined', false: undefined },
        rounded: { true: 'rounded', false: undefined },
        nobutton: { true: 'nobutton', false: undefined },
        fullWidth: { true: 'full-width', false: undefined },
        gradient: { true: 'gradient', false: undefined },
        circle: { true: 'circle', false: undefined },
        disabled: { true: 'disabled', false: undefined },
    },
    defaultVariants: {
        color: undefined,
        size: undefined,
        outlined: undefined,
        rounded: undefined,
        nobutton: undefined,
        fullWidth: undefined,
        gradient: undefined,
        circle: undefined,
        disabled: undefined,
    },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

export { default as Button } from './Button.vue'
