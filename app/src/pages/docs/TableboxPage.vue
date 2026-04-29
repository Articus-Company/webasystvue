<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="tablebox"
                    tag="h1"
                >
                    Tablebox
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="tablebox"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="tableboxAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="flexbox"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-tablebox"
                    tag="h3"
                    parent="api"
                >
                    &lt;Tablebox&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'space', type: `'0' | '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40' | '48'` },
                        { prop: 'fixed', type: 'boolean' },
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
                    id="el-tablebox-middle"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableboxMiddle&gt;
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
                    parent="tablebox"
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

                <DemoCard :code="tableboxSimpleExampleRaw">
                    <TableboxSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="fixed-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с fixed
                </DocHeading>

                <DemoCard
                    :code="tableboxFixedExampleRaw"
                    highlight-lines="{4}"
                >
                    <TableboxFixedExample/>
                </DemoCard>

                <DocHeading
                    id="middle-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с middle
                </DocHeading>

                <DemoCard
                    :code="tableboxMiddleExampleRaw"
                    highlight-lines="{5}"
                >
                    <TableboxMiddleExample/>
                </DemoCard>

                <DocHeading
                    id="item-middle-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с элементом middle
                </DocHeading>

                <DemoCard
                    :code="tableboxItemMiddleExampleRaw"
                    highlight-lines="{6,8}"
                >
                    <TableboxItemMiddleExample/>
                </DemoCard>

                <DocHeading
                    id="space-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с space
                </DocHeading>

                <DemoCard
                    :code="tableboxSpaceExampleRaw"
                    highlight-lines="{4}"
                >
                    <TableboxSpaceExample/>
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
import {
    TableboxFixedExample,
    TableboxItemMiddleExample,
    TableboxMiddleExample,
    TableboxSimpleExample,
    TableboxSpaceExample,
} from '@/examples/tablebox'
import tableboxAnatomyExampleRaw from '@/examples/tablebox/TableboxAnatomyExample.vue?raw'
import tableboxFixedExampleRaw from '@/examples/tablebox/TableboxFixedExample.vue?raw'
import tableboxItemMiddleExampleRaw from '@/examples/tablebox/TableboxItemMiddleExample.vue?raw'
import tableboxMiddleExampleRaw from '@/examples/tablebox/TableboxMiddleExample.vue?raw'
import tableboxSimpleExampleRaw from '@/examples/tablebox/TableboxSimpleExample.vue?raw'
import tableboxSpaceExampleRaw from '@/examples/tablebox/TableboxSpaceExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
