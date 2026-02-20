import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const userpicSizes = {
    '20': 'userpic20',
    '32': 'userpic32',
    '48': 'userpic48',
    '96': 'userpic96',
    '144': 'userpic144',
    '192': 'userpic192',
} as const

export const userpicVariants = cva('userpic', {
    variants: {
        size: userpicSizes,
        outlined: { true: 'outlined', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        outlined: undefined,
    },
})

export type UserpicVariants = VariantProps<typeof userpicVariants>

export { default as Userpic } from './Userpic.vue'
export { default as UserpicStatus } from './UserpicStatus.vue'
