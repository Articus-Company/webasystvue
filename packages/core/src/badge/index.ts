import type { VariantProps } from 'class-variance-authority'
import { colors, sizes } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const badgeVariants = cva('badge', {
    variants: {
        size: sizes,
        color: colors,
        user: { true: 'user', false: undefined },
        squared: { true: 'squared', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        color: undefined,
        user: undefined,
        squared: undefined,
    },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>

export { default as Badge } from './Badge.vue'
