<style scoped>
.doc-heading {
    position: relative;
}

.anchor {
    display: flex;
    opacity: 0;
    align-items: center;
    top: 0;
    position: absolute;
    margin-left: -2rem;
    height: 100%;
}

.anchor-button {
    position: absolute;
    display: flex;
}

.doc-heading:hover .anchor {
    opacity: 1;
}
</style>

<template>
    <component
        :is="tag"
        :id="id"
        class="doc-heading"
    >
        <a :href="`#${id}`">
            <span class="anchor">
                <span class="anchor-button">
                    <i
                        class="fab fa-slack-hash"
                        style="width: 1.5rem; height: 1.5rem;"
                    />
                </span>
            </span>
        </a>
        <slot/>
    </component>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useSlots } from 'vue'
import { useContentDoc } from '@/composables'

const props = defineProps<{
    id: string
    tag: 'h1' | 'h2' | 'h3'
    parent?: string
}>()

const slots = useSlots()
const { register, unregister } = useContentDoc()

onMounted(() => {
    const text = slots.default?.()[0]?.children as string
    register({ id: props.id, text }, props.parent)
})

onUnmounted(() => unregister(props.id, props.parent))
</script>
