import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const menuVariants = cva('menu', {
    variants: {
        ellipsis: { true: 'ellipsis', false: undefined },
        breakWords: { true: 'break-words', false: undefined },
        large: { true: 'large', false: undefined },
        mobileFriendly: { true: 'mobile-friendly', false: undefined },
    },
    defaultVariants: {
        ellipsis: undefined,
        breakWords: undefined,
        large: undefined,
        mobileFriendly: undefined,
    },
})

export type MenuVariants = VariantProps<typeof menuVariants>

export const menuSectionVariants = cva('', {
    variants: {
        selected: { true: 'selected', false: undefined },
        accented: { true: 'accented', false: undefined },
        rounded: { true: 'rounded', false: undefined },
        topPadded: { true: 'top-padded', false: undefined },
        bottomPadded: { true: 'bottom-padded', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
        accented: undefined,
        rounded: undefined,
        topPadded: undefined,
        bottomPadded: undefined,
    },
})

export type MenuSectionVariants = VariantProps<typeof menuSectionVariants>

export const menuItemCountVariants = cva('count', {
    variants: {
        action: { true: 'action', false: undefined },
    },
    defaultVariants: {
        action: undefined,
    },
})

export type MenuItemCountVariants = VariantProps<typeof menuItemCountVariants>

export { default as Menu } from './Menu.vue'
export { default as MenuItem } from './MenuItem.vue'
export { default as MenuItemCount } from './MenuItemCount.vue'
export { default as MenuItemIcon } from './MenuItemIcon.vue'
export { default as MenuSection } from './MenuSection.vue'
