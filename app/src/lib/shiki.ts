import vueLang from '@shikijs/langs/vue'
import githubDarkTheme from '@shikijs/themes/github-dark'
import githubLightTheme from '@shikijs/themes/github-light'
import { makeSingletonHighlighter } from 'shiki'
import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

function createVueHighlighterFactory() {
    return createHighlighterCore({
        themes: [githubDarkTheme, githubLightTheme],
        langs: [vueLang],
        engine: createOnigurumaEngine(import('shiki/wasm')),
    })
}

export const getVueHighlighter = makeSingletonHighlighter(createVueHighlighterFactory)
