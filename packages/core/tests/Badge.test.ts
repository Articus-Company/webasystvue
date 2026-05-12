import { describe, it } from 'vitest'
import { Badge } from '../src'
import { mountCheck } from './utils'

describe('badge компонент', () => {
    it('badge монтируется', () => mountCheck(Badge))
})
