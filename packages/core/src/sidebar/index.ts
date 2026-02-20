import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const sidebarWidth = {
    '10': 'width-10rem',
    '11': 'width-11rem',
    '12': 'width-12rem',
    '13': 'width-13rem',
    '14': 'width-14rem',
    '15': 'width-15rem',
    '16': 'width-16rem',
    '17': 'width-17rem',
    '18': 'width-18rem',
    '19': 'width-19rem',
    '20': 'width-20rem',
    '21': 'width-21rem',
    '22': 'width-22rem',
    '23': 'width-23rem',
    '24': 'width-24rem',
    '25': 'width-25rem',
    '26': 'width-26rem',
    'auto': 'width-auto',
    'adaptive-wider': 'width-adaptive-wider',
    'adaptive-widest': 'width-adaptive-widest',
} as const

export const sidebarVariants = cva('sidebar', {
    variants: {
        width: sidebarWidth,
        flexbox: { true: 'flexbox', false: undefined },
        overflowVisible: { true: 'overflow-visible', false: undefined },
        scrollsWithContent: { true: 'scrolls-with-content', false: undefined },
        right: { true: 'right', false: undefined },
        rail: { true: 'rail', false: undefined },
        heightAuto: { true: 'height-auto', false: undefined },
        mobileFriendly: { true: 'mobile-friendly', false: undefined },
    },
    defaultVariants: {
        width: undefined,
        flexbox: undefined,
        overflowVisible: undefined,
        scrollsWithContent: undefined,
        right: undefined,
        rail: undefined,
        heightAuto: undefined,
        mobileFriendly: undefined,
    },
})

export type SidebarVariants = VariantProps<typeof sidebarVariants>

export { default as Sidebar } from './Sidebar.vue'
export { default as SidebarBody } from './SidebarBody.vue'
export { default as SidebarFooter } from './SidebarFooter.vue'
export { default as SidebarHeader } from './SidebarHeader.vue'
