import { describe, it } from 'vitest'
import { Pulsar } from '../src'
import { mountCheck } from './utils'

describe('pulsar компонент', () => {
    it('pulsar монтируется', () => mountCheck(Pulsar))
})
