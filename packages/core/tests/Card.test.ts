import { describe, it } from 'vitest'
import { Card, CardDetails, CardImage } from '../src'
import { mountCheck } from './utils'

describe('card компоненты', () => {
    it('card монтируется', () => mountCheck(Card))
    it('cardDetails монтируется', () => mountCheck(CardDetails))
    it('cardImage монтируется', () => mountCheck(CardImage))
})
