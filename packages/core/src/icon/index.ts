import type { VariantProps } from 'class-variance-authority'
import { sizes } from '@lib/utils'
import { cva } from 'class-variance-authority'

const iconShift = {
    '1': 'shift-1',
    '2': 'shift-2',
    '3': 'shift-3',
    '4': 'shift-4',
    '5': 'shift-5',
    '6': 'shift-6',
    '7': 'shift-7',
    '8': 'shift-8',
} as const

const iconSizes = {
    ...sizes,
    '8': 'size-8',
    '10': 'size-10',
    '12': 'size-12',
    '14': 'size-14',
    '16': 'size-16',
    '18': 'size-18',
    '20': 'size-20',
    '22': 'size-22',
    '24': 'size-24',
    '26': 'size-26',
    '28': 'size-28',
    '30': 'size-30',
    '32': 'size-32',
    '48': 'size-48',
    '64': 'size-64',
    '72': 'size-72',
    '80': 'size-80',
    '96': 'size-96',
} as const

export const iconVariants = cva('icon', {
    variants: {
        size: iconSizes,
        shiftX: iconShift,
        top: { true: 'top', false: undefined },
        baseline: { true: 'baseline', false: undefined },
        middle: { true: 'middle', false: undefined },
        userpic: { true: 'userpic', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        shiftX: undefined,
        top: undefined,
        baseline: undefined,
        middle: undefined,
        userpic: undefined,
    },
})

export type IconVariants = VariantProps<typeof iconVariants>

export { default as Icon } from './Icon.vue'
