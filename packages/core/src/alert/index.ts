import type { VariantProps } from 'class-variance-authority'
import { sizes } from '@lib/utils'
import { cva } from 'class-variance-authority'

const alertTypes = {
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    outlined: 'outlined',
} as const

export const alertVariants = cva('alert', {
    variants: {
        size: sizes,
        type: alertTypes,
    },
    defaultVariants: {
        size: undefined,
        type: undefined,
    },
})

export type AlertVariants = VariantProps<typeof alertVariants>

export const alertFixedBoxVariants = cva('alert-fixed-box', {
    variants: {
        bottom: { true: 'bottom', false: undefined },
        large: { true: 'large', false: undefined },
    },
    defaultVariants: {
        bottom: undefined,
        large: undefined,
    },
})

export type AlertFixedBoxVariants = VariantProps<typeof alertFixedBoxVariants>

export { default as Alert } from './Alert.vue'
export { default as AlertClose } from './AlertClose.vue'
export { default as AlertFixedBox } from './AlertFixedBox.vue'
