<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="paging"
                    tag="h1"
                >
                    Paging
                </DocHeading>

                <DemoCard :code="pagingDemoExampleRaw">
                    <PagingDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="paging"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="pagingAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="paging"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-paging"
                    tag="h3"
                    parent="api"
                >
                    &lt;Paging&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'ul'` },
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
                    id="el-paging-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;PagingItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'li'` },
                        { prop: 'asChild' },
                        { prop: 'selected', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsDesc/>
                    </template>
                    <template #type-1>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>
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
import { PagingDemoExample } from '@/examples/paging'
import pagingAnatomyExampleRaw from '@/examples/paging/PagingAnatomyExample.vue?raw'
import pagingDemoExampleRaw from '@/examples/paging/PagingDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
