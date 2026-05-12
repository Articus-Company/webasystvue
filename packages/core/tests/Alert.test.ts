import { describe, it } from 'vitest'
import { Alert, AlertClose, AlertFixedBox } from '../src'
import { mountCheck } from './utils'

describe('alert компоненты', () => {
    it('alert монтируется', () => mountCheck(Alert))
    it('alertClose монтируется', () => mountCheck(AlertClose))
    it('alertFixedBox монтируется', () => mountCheck(AlertFixedBox))
})
