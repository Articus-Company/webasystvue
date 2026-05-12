import { describe, it } from 'vitest'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, TableScrollableX } from '../src'
import { mountCheck } from './utils'

describe('table компоненты', () => {
    it('table монтируется', () => mountCheck(Table))
    it('tableBody монтируется', () => mountCheck(TableBody))
    it('tableCaption монтируется', () => mountCheck(TableCaption))
    it('tableCell монтируется', () => mountCheck(TableCell))
    it('tableFooter монтируется', () => mountCheck(TableFooter))
    it('tableHead монтируется', () => mountCheck(TableHead))
    it('tableHeader монтируется', () => mountCheck(TableHeader))
    it('tableRow монтируется', () => mountCheck(TableRow))
    it('tableScrollableX монтируется', () => mountCheck(TableScrollableX))
})
