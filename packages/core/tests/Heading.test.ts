import { describe, it } from 'vitest'
import { Heading, HeadingCaret, HeadingCaretWrapper, HeadingItem } from '../src'
import { mountCheck } from './utils'

describe('heading компоненты', () => {
    it('heading монтируется', () => mountCheck(Heading))
    it('headingCaret монтируется', () => mountCheck(HeadingCaret))
    it('headingCaretWrapper монтируется', () => mountCheck(HeadingCaretWrapper))
    it('headingItem монтируется', () => mountCheck(HeadingItem))
})
