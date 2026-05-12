import { describe, it } from 'vitest'
import { Button } from '../src'
import { mountCheck } from './utils'

describe('button компонент', () => {
    it('button монтируется', () => mountCheck(Button))
})
