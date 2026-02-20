import type { VariantProps } from 'class-variance-authority'
import { aligns, sizes, verticalAligns } from '@lib/utils'
import { cva } from 'class-variance-authority'

export const tableVariants = cva('', {
    variants: {
        size: sizes,
        bigdata: { true: 'bigdata', false: undefined },
        zebra: { true: 'zebra', false: undefined },
        bordered: { true: 'bordered', false: undefined },
        borderless: { true: 'borderless', false: undefined },
        singleLined: { true: 'single-lined', false: undefined },
    },
    defaultVariants: {
        size: undefined,
        bigdata: undefined,
        zebra: undefined,
        bordered: undefined,
        borderless: undefined,
        singleLined: undefined,
    },
})

export type TableVariants = VariantProps<typeof tableVariants>

export const tableCellVariants = cva('', {
    variants: {
        align: aligns,
        verticalAlign: verticalAligns,
        minWidth: { true: 'min-width', false: undefined },
        maxWidth: { true: 'max-width', false: undefined },
    },
    defaultVariants: {
        align: undefined,
        verticalAlign: undefined,
        minWidth: undefined,
        maxWidth: undefined,
    },
})

export type TableCellVariants = VariantProps<typeof tableCellVariants>

export const tableRowVariants = cva('', {
    variants: {
        selected: { true: 'selected', false: undefined },
    },
    defaultVariants: {
        selected: undefined,
    },
})

export type TableRowVariants = VariantProps<typeof tableRowVariants>

export const tableHeadVariants = cva('', {
    variants: {
        align: aligns,
        verticalAlign: verticalAligns,
        minWidth: { true: 'min-width', false: undefined },
        maxWidth: { true: 'max-width', false: undefined },
    },
    defaultVariants: {
        align: undefined,
        verticalAlign: undefined,
        minWidth: undefined,
        maxWidth: undefined,
    },
})

export type TableHeadVariants = VariantProps<typeof tableHeadVariants>

export { default as Table } from './Table.vue'
export { default as TableBody } from './TableBody.vue'
export { default as TableCaption } from './TableCaption.vue'
export { default as TableCell } from './TableCell.vue'
export { default as TableHead } from './TableHead.vue'
export { default as TableHeader } from './TableHeader.vue'
export { default as TableRow } from './TableRow.vue'
export { default as TableScrollableX } from './TableScrollableX.vue'
