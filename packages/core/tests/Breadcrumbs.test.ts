import { describe, it } from 'vitest'
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsSection } from '../src'
import { mountCheck } from './utils'

describe('breadcrumbs компоненты', () => {
    it('breadcrumbs монтируется', () => mountCheck(Breadcrumbs))
    it('breadcrumbsItem монтируется', () => mountCheck(BreadcrumbsItem))
    it('breadcrumbsSection монтируется', () => mountCheck(BreadcrumbsSection))
})
