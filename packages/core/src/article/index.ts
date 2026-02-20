import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const articleVariants = cva('article', {
    variants: {
        shadowed: { true: 'shadowed', false: undefined },
        wide: { true: 'wide', false: undefined },
        wider: { true: 'wider', false: undefined },
    },
    defaultVariants: {
        shadowed: undefined,
        wide: undefined,
        wider: undefined,
    },
})

export type ArticleVariants = VariantProps<typeof articleVariants>

export const articleHeaderVariants = cva('article-header', {
    variants: {
        fullWidth: { true: 'full-width', false: undefined },
    },
    defaultVariants: {
        fullWidth: undefined,
    },
})

export type ArticleHeaderVariants = VariantProps<typeof articleHeaderVariants>

export const articleFooterVariants = cva('article-footer', {
    variants: {
        fullWidth: { true: 'full-width', false: undefined },
    },
    defaultVariants: {
        fullWidth: undefined,
    },
})

export type ArticleFooterVariants = VariantProps<typeof articleFooterVariants>

export { default as Article } from './Article.vue'
export { default as ArticleBody } from './ArticleBody.vue'
export { default as ArticleFooter } from './ArticleFooter.vue'
export { default as ArticleHeader } from './ArticleHeader.vue'
