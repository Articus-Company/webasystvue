import { describe, it } from 'vitest'
import { Tabs, TabsItem, TabsItemCount, TabsSection } from '../src'
import { mountCheck } from './utils'

describe('tabs компоненты', () => {
    it('tabs монтируется', () => mountCheck(Tabs))
    it('tabsItem монтируется', () => mountCheck(TabsItem))
    it('tabsItemCount монтируется', () => mountCheck(TabsItemCount))
    it('tabsSection монтируется', () => mountCheck(TabsSection))
})
