import type { VariantProps } from 'class-variance-authority'
import { sizes } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const chipsVariants = cva('chips', {
    variants: {
        size: sizes,
        outlined: { true: 'outlined', false: undefined },
        rounded: { true: 'rounded', false: undefined },
        transparent: { true: 'transparent', false: undefined },
        tags: { true: 'tags', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        outlined: undefined,
        rounded: undefined,
        transparent: undefined,
        tags: undefined,
    },
})

export type ChipsVariants = VariantProps<typeof chipsVariants>

export const chipsSectionVariants = cva('', {
    variants: {
        size: sizes,
        outlined: { true: 'outlined', false: undefined },
        rounded: { true: 'rounded', false: undefined },
        transparent: { true: 'transparent', false: undefined },
        tag: { true: 'tag', false: undefined },
        accented: { true: 'accented', false: undefined },
        selected: { true: 'selected', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        outlined: undefined,
        rounded: undefined,
        transparent: undefined,
        tag: undefined,
        accented: undefined,
        selected: undefined,
    },
})

export type ChipsSectionVariants = VariantProps<typeof chipsSectionVariants>

export {
    default as Chips,
    type ChipsProps,
} from './Chips.vue'
export {
    default as ChipsItem,
    type ChipsItemProps,
} from './ChipsItem.vue'
export {
    default as ChipsItemCount,
    type ChipsItemCountProps,
} from './ChipsItemCount.vue'
export {
    default as ChipsSection,
    type ChipsSectionProps,
} from './ChipsSection.vue'
