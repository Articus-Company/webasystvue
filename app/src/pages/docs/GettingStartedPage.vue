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
                    id="introduction"
                    tag="h2"
                    parent="getting-started"
                >
                    Введение
                </DocHeading>

                <p>
                    Webasyst UI 2.0 поставляется с готовым набором CSS и JS-компонентов.
                    Они хорошо документированы и покрывают большую часть типичных
                    интерфейсных задач. Проблема только в том, что работать с ними напрямую - это
                    копипаст разметки, ручное управление состояниями и отсутствие какой-либо
                    типизации.
                </p>

                <p>
                    WebasystVue - это обёртка над UI 2.0 на Vue 3 и TypeScript. Никакой собственной
                    дизайн-системы, никакого переосмысления компонентов, только те же самые
                    элементы интерфейса Webasyst, но оформленные в виде декларативных
                    Vue-компонентов с типами и поддержкой Composition API.
                </p>

                <p>
                    Если вы уже работаете с Vue 3 в своём приложении или только думаете о том, чтобы
                    добавить реактивный слой поверх PHP-бэкенда Webasyst - WebasystVue даёт для
                    этого готовую точку входа.
                </p>

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
                    Библиотека предоставляет набор Vue-компонентов, которые полностью типизированы и
                    готовы к использованию.
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
                    Библиотека построена на принципе Compound Components: компоненты не диктуют
                    фиксированную структуру, а дают строительные блоки, из которых вы собираете
                    нужный интерфейс. Это значит, что вы сохраняете полный контроль над вёрсткой, не
                    теряя при этом удобства типизированного API.
                </p>

                <DocHeading
                    id="build"
                    tag="h2"
                    parent="getting-started"
                >
                    Сборка проекта
                </DocHeading>

                <p>
                    Для сборки Vue-приложения в Webasyst можно использовать
                    <a
                        href="https://github.com/Articus-Company/vite-plugin-webasyst"
                        target="_blank"
                    >
                        vite-plugin-webasyst
                        <i class="fas fa-external-link-alt hint"/>
                    </a> - Vite-плагин с инструкцией по интеграции.
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
import gettingStartedUsageExampleRaw
    from '@/examples/getting-started/GettingStartedUsageExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
