import { describe, it } from 'vitest'
import { Icon } from '../src'
import { mountCheck } from './utils'

describe('icon компонент', () => {
    it('icon монтируется', () => mountCheck(Icon))
})
