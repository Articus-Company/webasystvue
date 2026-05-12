import { describe, it } from 'vitest'
import { Spinner } from '../src'
import { mountCheck } from './utils'

describe('spinner компонент', () => {
    it('spinner монтируется', () => mountCheck(Spinner))
})
