<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="inlinebox"
                    tag="h1"
                >
                    Inlinebox
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="inlinebox"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="inlineboxAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="inlinebox"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-inlinebox"
                    tag="h3"
                    parent="api"
                >
                    &lt;Inlinebox>
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'space', type: '0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48' },
                        { prop: 'baseline', type: 'boolean' },
                        { prop: 'middle', type: 'boolean' },
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
                    parent="inlinebox"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="simple-example"
                    tag="h3"
                    parent="examples"
                >
                    Простой пример
                </DocHeading>

                <DemoCard :code="inlineboxSimpleExampleRaw">
                    <InlineboxSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="space-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием space
                </DocHeading>

                <DemoCard
                    :code="inlineboxSpaceExampleRaw"
                    highlight-lines="{2}"
                >
                    <InlineboxSpaceExample/>
                </DemoCard>

                <DocHeading
                    id="ul-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием ul
                </DocHeading>

                <DemoCard
                    :code="inlineboxUlExampleRaw"
                    highlight-lines="{2}"
                >
                    <InlineboxUlExample/>
                </DemoCard>

                <DocHeading
                    id="baseline-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием baseline
                </DocHeading>

                <DemoCard
                    :code="inlineboxBaselineExampleRaw"
                    highlight-lines="{2}"
                >
                    <InlineboxBaselineExample/>
                </DemoCard>

                <DocHeading
                    id="middle-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием middle
                </DocHeading>

                <DemoCard
                    :code="inlineboxMiddleExampleRaw"
                    highlight-lines="{2}"
                >
                    <InlineboxMiddleExample/>
                </DemoCard>
            </ArticleBody>
        </Article>
    </DocsLayout>
</template>

<script setup lang="ts">
import {
    Article,
    ArticleBody,
} from 'webasystvue'
import { CodeVueHighlighter } from '@/components/code-highlighter'
import {
    ApiPropsAsChildDesc,
    ApiPropsAsDesc,
    ApiPropsTable,
} from '@/components/docs/api-props-table'
import { DemoCard } from '@/components/docs/demo-card'
import { DocHeading } from '@/components/docs/doc-heading'
import {
    InlineboxBaselineExample,
    InlineboxMiddleExample,
    InlineboxSimpleExample,
    InlineboxSpaceExample,
    InlineboxUlExample,
} from '@/examples/inlinebox'
import inlineboxAnatomyExampleRaw from '@/examples/inlinebox/InlineboxAnatomyExample.vue?raw'
import inlineboxBaselineExampleRaw from '@/examples/inlinebox/InlineboxBaselineExample.vue?raw'
import inlineboxMiddleExampleRaw from '@/examples/inlinebox/InlineboxMiddleExample.vue?raw'
import inlineboxSimpleExampleRaw from '@/examples/inlinebox/InlineboxSimpleExample.vue?raw'
import inlineboxSpaceExampleRaw from '@/examples/inlinebox/InlineboxSpaceExample.vue?raw'
import inlineboxUlExampleRaw from '@/examples/inlinebox/InlineboxUlExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
