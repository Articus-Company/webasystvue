import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const breadcrumbsItemVariants = cva('', {
    variants: {
        active: { true: 'active', false: undefined },
    },
    defaultVariants: {
        active: undefined,
    },
})

export type BreadcrumbsItemVariants = VariantProps<typeof breadcrumbsItemVariants>

export { default as Breadcrumbs } from './Breadcrumbs.vue'
export { default as BreadcrumbsItem } from './BreadcrumbsItem.vue'
