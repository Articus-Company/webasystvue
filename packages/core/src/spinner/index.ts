import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const spinnerSizes = {
    '0': 'custom-p-0',
    '2': 'custom-p-2',
    '4': 'custom-p-4',
    '6': 'custom-p-6',
    '8': 'custom-p-8',
    '10': 'custom-p-10',
    '12': 'custom-p-12',
    '14': 'custom-p-14',
    '16': 'custom-p-16',
    '20': 'custom-p-20',
    '24': 'custom-p-24',
    '32': 'custom-p-32',
    '40': 'custom-p-40',
    '48': 'custom-p-48',
} as const

export const spinnerVariants = cva('spinner', {
    variants: {
        size: spinnerSizes,
    },
    defaultVariants: {
        size: undefined,
    },
})

export type SpinnerVariants = VariantProps<typeof spinnerVariants>

export { default as Spinner } from './Spinner.vue'
