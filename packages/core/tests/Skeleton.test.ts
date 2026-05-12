import { describe, it } from 'vitest'
import { Skeleton, SkeletonCustomBox, SkeletonCustomCircle, SkeletonHeader, SkeletonLine, SkeletonList } from '../src'
import { mountCheck } from './utils'

describe('skeleton компоненты', () => {
    it('skeleton монтируется', () => mountCheck(Skeleton))
    it('skeletonCustomBox монтируется', () => mountCheck(SkeletonCustomBox))
    it('skeletonCustomCircle монтируется', () => mountCheck(SkeletonCustomCircle))
    it('skeletonHeader монтируется', () => mountCheck(SkeletonHeader))
    it('skeletonLine монтируется', () => mountCheck(SkeletonLine))
    it('skeletonList монтируется', () => mountCheck(SkeletonList))
})
