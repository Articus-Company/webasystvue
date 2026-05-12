import type { VueWrapper } from '@vue/test-utils'
import type { Component } from 'vue'
import { mount } from '@vue/test-utils'
import { expect } from 'vitest'

export function mountCheck(component: Component): VueWrapper<any> {
    const wrapper = mount(component)
    expect(wrapper.exists()).toBe(true)
    return wrapper
}
