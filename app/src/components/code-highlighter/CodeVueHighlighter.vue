<style scoped>
.highlighter-container {
    position: relative;
}

.highlighter-container .copy-container {
    position: absolute;
    right: .5rem;
    top: .5rem;
}
</style>

<style>
.webasystvue-highlighter {
    position: relative;
}

.webasystvue-highlighter pre {
    padding: 20px 0;
    background-color: hsl(var(--webasystvue-card-background)) !important;
}

.webasystvue-highlighter code {
    background: none;
    color: unset;
    border-radius: unset;
    padding: 0 24px;
    display: block;
}

.webasystvue-highlighter .shiki span.line.highlighted {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 0;
    width: 100%;
    display: inline-block;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    background-color: var(--background-color-blockquote) !important;
}

html[data-theme="dark"] .webasystvue-highlighter .shiki span {
    color: var(--shiki-dark) !important;
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>

<template>
    <div class="highlighter-container">
        <div
            v-if="html"
            class="webasystvue-highlighter small"
            v-html="html"
        />
        <ButtonCopy
            class="copy-container"
            title="Копировать код"
            :text="code"
        />
    </div>
</template>

<script setup lang="ts">
import { transformerMetaHighlight } from '@shikijs/transformers'
import { onMounted, ref } from 'vue'
import { ButtonCopy } from '@/components/button-copy'
import { getVueHighlighter } from '@/lib'

const props = defineProps<{
    code: string
    highlightLines?: string
}>()

const html = ref<string | null>(null)

async function highlight() {
    const h = await getVueHighlighter()
    html.value = h.codeToHtml(props.code.trim(), {
        lang: 'vue',
        themes: {
            light: 'github-light',
            dark: 'github-dark',
        },
        meta: { __raw: props.highlightLines ?? '' },
        transformers: [transformerMetaHighlight()],
    })
}

onMounted(highlight)
</script>
