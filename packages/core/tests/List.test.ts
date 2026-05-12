import { describe, it } from 'vitest'
import { List, ListItem, ListItemDetails, ListItemImage } from '../src'
import { mountCheck } from './utils'

describe('list компоненты', () => {
    it('list монтируется', () => mountCheck(List))
    it('listItem монтируется', () => mountCheck(ListItem))
    it('listItemDetails монтируется', () => mountCheck(ListItemDetails))
    it('listItemImage монтируется', () => mountCheck(ListItemImage))
})
