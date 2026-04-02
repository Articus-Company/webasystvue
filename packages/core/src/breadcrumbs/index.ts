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

export {
    default as Breadcrumbs,
    type BreadcrumbsProps,
} from './Breadcrumbs.vue'
export {
    default as BreadcrumbsItem,
    type BreadcrumbsItemProps,
} from './BreadcrumbsItem.vue'
export {
    default as BreadcrumbsSection,
    type BreadcrumbsSectionProps,
} from './BreadcrumbsSection.vue'
