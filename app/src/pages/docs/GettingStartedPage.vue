<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="getting-started"
                    tag="h1"
                >
                    Начало работы
                </DocHeading>

                <DocHeading
                    id="install"
                    tag="h2"
                    parent="getting-started"
                >
                    Установка
                </DocHeading>

                <InstallCommands/>

                <DocHeading
                    id="usage"
                    tag="h2"
                    parent="getting-started"
                >
                    Использование
                </DocHeading>

                <p>
                    Библиотека предоставляет набор Vue-компонентов, которые полностью типизированы и готовы к использованию.
                    Просто импортируйте нужный компонент и вставляйте его в шаблон.
                </p>

                <DocHeading
                    id="example"
                    tag="h3"
                    parent="usage"
                >
                    Простой пример
                </DocHeading>

                <CodeVueHighlighter :code="gettingStartedUsageExampleRaw"/>

                <DocHeading
                    id="composition"
                    tag="h3"
                    parent="usage"
                >
                    Композиция компонентов
                </DocHeading>

                <p>
                    Библиотека построена на принципе Compound Components.
                    Это даёт полный контроль над вёрсткой без ограничений фиксированной структуры.
                </p>
            </ArticleBody>
        </Article>
    </DocsLayout>
</template>

<script setup lang="ts">
import { Article, ArticleBody } from 'webasystvue'
import { CodeVueHighlighter } from '@/components/code-highlighter'
import { DocHeading } from '@/components/docs/doc-heading'
import { InstallCommands } from '@/components/docs/install-commands'
import gettingStartedUsageExampleRaw from '@/examples/getting-started/GettingStartedUsageExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
