<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="userpic"
                    tag="h1"
                >
                    Userpic
                </DocHeading>

                <DemoCard :code="userpicDemoExampleRaw">
                    <UserpicDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="userpic"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="userpicAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="userpic"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-userpic"
                    tag="h3"
                    parent="api"
                >
                    &lt;Userpic&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'size', type: `'20' | '32' | '48' | '96' | '144' | '192'` },
                        { prop: 'outlined', type: 'boolean' },
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
                    id="el-userpic-status"
                    tag="h3"
                    parent="api"
                >
                    &lt;UserpicStatus&gt;
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
                    parent="userpic"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="size-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример userpic с изменённым размером
                </DocHeading>

                <DemoCard
                    :code="userpicSizeExampleRaw"
                    highlight-lines="{4,9}"
                >
                    <UserpicSizeExample/>
                </DemoCard>

                <DocHeading
                    id="outlined-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример userpic с атрибутом outlined
                </DocHeading>

                <DemoCard
                    :code="userpicOutlinedExampleRaw"
                    highlight-lines="{4}"
                >
                    <UserpicOutlinedExample/>
                </DemoCard>

                <DocHeading
                    id="status-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример userpic со статусом
                </DocHeading>

                <DemoCard
                    :code="userpicStatusExampleRaw"
                    highlight-lines="{7,18,29,31}"
                >
                    <UserpicStatusExample/>
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
    UserpicDemoExample,
    UserpicOutlinedExample,
    UserpicSizeExample,
    UserpicStatusExample,
} from '@/examples/userpic'
import userpicAnatomyExampleRaw from '@/examples/userpic/UserpicAnatomyExample.vue?raw'
import userpicDemoExampleRaw from '@/examples/userpic/UserpicDemoExample.vue?raw'
import userpicOutlinedExampleRaw from '@/examples/userpic/UserpicOutlinedExample.vue?raw'
import userpicSizeExampleRaw from '@/examples/userpic/UserpicSizeExample.vue?raw'
import userpicStatusExampleRaw from '@/examples/userpic/UserpicStatusExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
