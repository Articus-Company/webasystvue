import { describe, it } from 'vitest'
import { Thumbs, ThumbsItem, ThumbsItemImage } from '../src'
import { mountCheck } from './utils'

describe('thumbs компоненты', () => {
    it('thumbs монтируется', () => mountCheck(Thumbs))
    it('thumbsItem монтируется', () => mountCheck(ThumbsItem))
    it('thumbsItemImage монтируется', () => mountCheck(ThumbsItemImage))
})
