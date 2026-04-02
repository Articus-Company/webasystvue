import type { VariantProps } from 'class-variance-authority'
import { sizes, spaces } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const tabsVariants = cva('tabs', {
    variants: {
        size: sizes,
        borderedBottom: { true: 'bordered-bottom', false: undefined },
        overflowDropdown: { true: 'overflow-dropdown', false: undefined },
        overflowArrows: { true: 'overflow-arrows', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        borderedBottom: undefined,
        overflowDropdown: undefined,
        overflowArrows: undefined,
    },
})

export type TabsVariants = VariantProps<typeof tabsVariants>

export const tabsSectionVariants = cva('', {
    variants: {
        selected: { true: 'selected', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
    },
})

export type TabsSectionVariants = VariantProps<typeof tabsSectionVariants>

export const tabsArrowWrapperVariants = cva('tabs-arrows-wrapper', {
    variants: {
        space: spaces,
        inlinebox: { true: 'inlinebox', false: undefined },
        right: { true: 'right', false: undefined },
        left: { true: 'left', false: undefined },
    },
    defaultVariants: {
        space: undefined,
        inlinebox: undefined,
        right: undefined,
        left: undefined,
    },
})

export type TabsArrowWrapperVariants = VariantProps<typeof tabsArrowWrapperVariants>

export const tabsPreviousVariants = cva('left', {
    variants: {
        isActive: { true: 'is-active', false: undefined },
    },
    defaultVariants: {
        isActive: undefined,
    },
})

export type TabsPreviousVariants = VariantProps<typeof tabsPreviousVariants>

export const tabsNextVariants = cva('right', {
    variants: {
        isActive: { true: 'is-active', false: undefined },
    },
    defaultVariants: {
        isActive: undefined,
    },
})

export type TabsNextVariants = VariantProps<typeof tabsNextVariants>

export {
    default as Tabs,
    type TabsProps,
} from './Tabs.vue'
export {
    default as TabsArrowWrapper,
    type TabsArrowWrapperProps,
} from './TabsArrowWrapper.vue'
export {
    default as TabsItem,
    type TabsItemProps,
} from './TabsItem.vue'
export {
    default as TabsItemCount,
    type TabsItemCountProps,
} from './TabsItemCount.vue'
export {
    default as TabsNext,
    type TabsNextProps,
} from './TabsNext.vue'
export {
    default as TabsPrevious,
    type TabsPreviousProps,
} from './TabsPrevious.vue'
export {
    default as TabsSection,
    type TabsSectionProps,
} from './TabsSection.vue'
export {
    default as TabsWrapperArrows,
    type TabsWrapperArrowsProps,
} from './TabsWrapperArrows.vue'
