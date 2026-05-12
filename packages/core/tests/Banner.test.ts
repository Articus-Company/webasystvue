import { describe, it } from 'vitest'
import { Banner, BannerClose } from '../src'
import { mountCheck } from './utils'

describe('banner компоненты', () => {
    it('banner монтируется', () => mountCheck(Banner))
    it('bannerClose монтируется', () => mountCheck(BannerClose))
})
