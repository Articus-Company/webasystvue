import { createInjectionState } from '@vueuse/core'
import { ref, watch } from 'vue'

export interface ContentDocItem {
    id: string
    text: string
    children?: ContentDocItem[]
}

const [useProvideContentDoc, useInjectContentDoc] = createInjectionState(() => {
    const items = ref<ContentDocItem[]>([])

    const activeId = ref<string>('')

    function observe() {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        activeId.value = entry.target.id
                        break
                    }
                }
            },
            { rootMargin: '-64px 0px -60% 0px' },
        )

        function observeAll(items: ContentDocItem[]) {
            for (const item of items) {
                const el = document.getElementById(item.id)
                if (el) {
                    observer.observe(el)
                }
                if (item.children) {
                    observeAll(item.children)
                }
            }
        }

        watch(items, () => {
            observer.disconnect()
            observeAll(items.value)
        }, { deep: true })
    }

    observe()

    function register(item: ContentDocItem, parent?: string) {
        if (parent) {
            const parentItem = findItem(items.value, parent)
            if (parentItem) {
                parentItem.children ??= []
                parentItem.children.push(item)
                return
            }
        }
        items.value.push(item)
    }

    function unregister(id: string, parent?: string) {
        if (parent) {
            const parentItem = findItem(items.value, parent)
            if (parentItem?.children) {
                parentItem.children = parentItem.children.filter(i => i.id !== id)
            }
            return
        }
        items.value = items.value.filter(i => i.id !== id)
    }

    function findItem(items: ContentDocItem[], id: string): ContentDocItem | undefined {
        for (const item of items) {
            if (item.id === id) {
                return item
            }
            if (item.children) {
                const found = findItem(item.children, id)
                if (found) {
                    return found
                }
            }
        }
    }

    return { items, activeId, register, unregister }
})

function useContentDoc() {
    const contentDocState = useInjectContentDoc()

    if (!contentDocState) {
        throw new Error('useContentDoc() отсутствует провайдер useProvideContentDoc()')
    }

    return contentDocState
}

export { useContentDoc, useProvideContentDoc }
