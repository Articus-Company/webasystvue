<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="content"
                    tag="h1"
                >
                    Content
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="content"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="contentAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="content"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-content"
                    tag="h3"
                    parent="api"
                >
                    &lt;Content&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsDesc/>
                    </template>
                    <template #type-1>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="examples"
                    tag="h2"
                    parent="content"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="use-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример использования компонента
                </DocHeading>

                <CodeVueHighlighter
                    :code="contentUseExampleRaw"
                    highlight-lines="{4,6}"
                />
            </ArticleBody>
        </Article>
    </DocsLayout>
</template>

<script setup lang="ts">
import { Article, ArticleBody } from 'webasystvue'
import { CodeVueHighlighter } from '@/components/code-highlighter'
import {
    ApiPropsAsChildDesc,
    ApiPropsAsDesc,
    ApiPropsTable,
} from '@/components/docs/api-props-table'
import { DocHeading } from '@/components/docs/doc-heading'
import contentAnatomyExampleRaw from '@/examples/content/ContentAnatomyExample.vue?raw'
import contentUseExampleRaw from '@/examples/content/ContentUseExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
