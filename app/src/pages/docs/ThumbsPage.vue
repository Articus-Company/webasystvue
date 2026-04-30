<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="thumbs"
                    tag="h1"
                >
                    Thumbs
                </DocHeading>

                <DemoCard :code="thumbsDemoExampleRaw">
                    <div style="width: 660px;">
                        <ThumbsDemoExample/>
                    </div>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="thumbs"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="thumbsAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="tabs"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-thumbs"
                    tag="h3"
                    parent="api"
                >
                    &lt;Thumbs&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'size', type: `'50' | '100' | '150' | '200' | '250' | '300' | '350'` },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-thumbs-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;ThumbsItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'selected', type: 'boolean' },
                        { prop: 'shadowed', type: 'boolean' },
                        { prop: 'highlighted', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-thumbs-item-image"
                    tag="h3"
                    parent="api"
                >
                    &lt;ThumbsItemImage&gt;
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
                    parent="thumbs"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="selected-shadowed-highlighted-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример selected, shadowed и highlighted атрибутов
                </DocHeading>

                <DemoCard
                    :code="thumbsSelectedShadowedHighlightedExampleRaw"
                    highlight-lines="{4,12,21}"
                >
                    <ThumbsSelectedShadowedHighlightedExample/>
                </DemoCard>
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
import { DemoCard } from '@/components/docs/demo-card'
import { DocHeading } from '@/components/docs/doc-heading'
import { ThumbsDemoExample, ThumbsSelectedShadowedHighlightedExample } from '@/examples/thumbs'
import thumbsAnatomyExampleRaw from '@/examples/thumbs/ThumbsAnatomyExample.vue?raw'
import thumbsDemoExampleRaw from '@/examples/thumbs/ThumbsDemoExample.vue?raw'
import thumbsSelectedShadowedHighlightedExampleRaw from '@/examples/thumbs/ThumbsSelectedShadowedHighlightedExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
