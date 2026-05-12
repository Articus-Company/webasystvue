import { describe, it } from 'vitest'
import { Box } from '../src'
import { mountCheck } from './utils'

describe('box компонент', () => {
    it('box монтируется', () => mountCheck(Box))
})
