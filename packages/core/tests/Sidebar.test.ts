import { describe, it } from 'vitest'
import { Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarMobileToggle } from '../src'
import { mountCheck } from './utils'

describe('sidebar компоненты', () => {
    it('sidebar монтируется', () => mountCheck(Sidebar))
    it('sidebarBody монтируется', () => mountCheck(SidebarBody))
    it('sidebarFooter монтируется', () => mountCheck(SidebarFooter))
    it('sidebarHeader монтируется', () => mountCheck(SidebarHeader))
    it('sidebarMobileToggle монтируется', () => mountCheck(SidebarMobileToggle))
})
