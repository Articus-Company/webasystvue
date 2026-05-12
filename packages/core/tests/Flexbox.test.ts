import { describe, it } from 'vitest'
import { Flexbox } from '../src'
import { mountCheck } from './utils'

describe('flexbox компонент', () => {
    it('flexbox монтируется', () => mountCheck(Flexbox))
})
