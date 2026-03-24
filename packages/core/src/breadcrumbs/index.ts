import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const breadcrumbsSectionVariants = cva('', {
    variants: {
        active: { true: 'active', false: undefined },
    },
    defaultVariants: {
        active: undefined,
    },
})

export type BreadcrumbsSectionVariants = VariantProps<typeof breadcrumbsSectionVariants>

export { default as Breadcrumbs } from './Breadcrumbs.vue'
export { default as BreadcrumbsItem } from './BreadcrumbsItem.vue'
export { default as BreadcrumbsSection } from './BreadcrumbsSection.vue'
