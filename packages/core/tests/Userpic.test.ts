import { describe, it } from 'vitest'
import { Userpic, UserpicStatus } from '../src'
import { mountCheck } from './utils'

describe('userpic компоненты', () => {
    it('userpic монтируется', () => mountCheck(Userpic))
    it('userpicStatus монтируется', () => mountCheck(UserpicStatus))
})
