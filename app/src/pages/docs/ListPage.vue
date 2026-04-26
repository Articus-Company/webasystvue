<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="list"
                    tag="h1"
                >
                    List
                </DocHeading>

                <DemoCard :code="listDemoExampleRaw">
                    <ListDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="list"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="listAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="list"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-list"
                    tag="h3"
                    parent="api"
                >
                    &lt;List&gt;
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
                    id="el-list-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;ListItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
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

                <DocHeading
                    id="el-list-item-details"
                    tag="h3"
                    parent="api"
                >
                    &lt;ListItemDetails&gt;
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
                    id="el-list-item-image"
                    tag="h3"
                    parent="api"
                >
                    &lt;ListItemImage&gt;
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
import { ListDemoExample } from '@/examples/list'
import listAnatomyExampleRaw from '@/examples/list/ListAnatomyExample.vue?raw'
import listDemoExampleRaw from '@/examples/list/ListDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
