import { describe, it } from 'vitest'
import { Chips, ChipsItem, ChipsItemCount, ChipsSection } from '../src'
import { mountCheck } from './utils'

describe('chips компоненты', () => {
    it('chips монтируется', () => mountCheck(Chips))
    it('chipsItem монтируется', () => mountCheck(ChipsItem))
    it('chipsItemCount монтируется', () => mountCheck(ChipsItemCount))
    it('chipsSection монтируется', () => mountCheck(ChipsSection))
})
