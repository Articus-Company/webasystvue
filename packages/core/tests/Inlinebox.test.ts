import { describe, it } from 'vitest'
import { Inlinebox } from '../src'
import { mountCheck } from './utils'

describe('inlinebox компонент', () => {
    it('inlinebox монтируется', () => mountCheck(Inlinebox))
})
