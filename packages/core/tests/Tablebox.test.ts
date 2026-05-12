import { describe, it } from 'vitest'
import { Tablebox, TableboxMiddle } from '../src'
import { mountCheck } from './utils'

describe('tablebox компоненты', () => {
    it('tablebox монтируется', () => mountCheck(Tablebox))
    it('tableboxMiddle монтируется', () => mountCheck(TableboxMiddle))
})
