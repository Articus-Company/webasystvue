import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const bannerVariants = cva('banner', {
    variants: {
        static: { true: 'static', false: undefined },
    },
    defaultVariants: {
        static: undefined,
    },
})

export type BannerVariants = VariantProps<typeof bannerVariants>

export { default as Banner } from './Banner.vue'
export { default as BannerClose } from './BannerClose.vue'
