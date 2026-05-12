import { describe, it } from 'vitest'
import { Menu, MenuItem, MenuItemCount, MenuSection } from '../src'
import { mountCheck } from './utils'

describe('menu компоненты', () => {
    it('menu монтируется', () => mountCheck(Menu))
    it('menuItem монтируется', () => mountCheck(MenuItem))
    it('menuItemCount монтируется', () => mountCheck(MenuItemCount))
    it('menuSection монтируется', () => mountCheck(MenuSection))
})
