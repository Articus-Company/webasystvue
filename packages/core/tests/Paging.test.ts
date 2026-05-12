import { describe, it } from 'vitest'
import { Paging, PagingItem } from '../src'
import { mountCheck } from './utils'

describe('paging компоненты', () => {
    it('paging монтируется', () => mountCheck(Paging))
    it('pagingItem монтируется', () => mountCheck(PagingItem))
})
