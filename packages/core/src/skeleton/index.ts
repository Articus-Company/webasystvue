import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const skeletonCustomCircleSizes = {
    '48': 'size-48',
    '96': 'size-96',
    '144': 'size-144',
    '192': 'size-192',
} as const

export const skeletonCustomCircleVariants = cva('skeleton-custom-circle', {
    variants: {
        size: skeletonCustomCircleSizes,
    },
    defaultVariants: {
        size: undefined,
    },
})

export type SkeletonCustomCircleVariants = VariantProps<typeof skeletonCustomCircleVariants>

export { default as Skeleton } from './Skeleton.vue'
export { default as SkeletonCustomBox } from './SkeletonCustomBox.vue'
export { default as SkeletonCustomCircle } from './SkeletonCustomCircle.vue'
export { default as SkeletonHeader } from './SkeletonHeader.vue'
export { default as SkeletonLine } from './SkeletonLine.vue'
export { default as SkeletonList } from './SkeletonList.vue'
