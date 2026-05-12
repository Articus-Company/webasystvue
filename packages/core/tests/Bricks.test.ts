import { describe, it } from 'vitest'
import { Bricks, BricksItem, BricksItemCount, BricksItemIcon } from '../src'
import { mountCheck } from './utils'

describe('bricks компоненты', () => {
    it('bricks монтируется', () => mountCheck(Bricks))
    it('bricksItem монтируется', () => mountCheck(BricksItem))
    it('bricksItemCount монтируется', () => mountCheck(BricksItemCount))
    it('bricksItemIcon монтируется', () => mountCheck(BricksItemIcon))
})
