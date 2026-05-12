import { describe, it } from 'vitest'
import { Content } from '../src'
import { mountCheck } from './utils'

describe('content компонент', () => {
    it('content монтируется', () => mountCheck(Content))
})
