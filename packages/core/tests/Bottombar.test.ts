import { describe, it } from 'vitest'
import { Bottombar, BottombarList, BottombarListItem } from '../src'
import { mountCheck } from './utils'

describe('bottombar компоненты', () => {
    it('bottombar монтируется', () => mountCheck(Bottombar))
    it('bottombarList монтируется', () => mountCheck(BottombarList))
    it('bottombarListItem монтируется', () => mountCheck(BottombarListItem))
})
