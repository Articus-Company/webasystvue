<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="bricks"
                    tag="h1"
                >
                    Bricks
                </DocHeading>

                <DemoCard :code="bricksDemoExampleRaw">
                    <BricksDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="bricks"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="bricksAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="bricks"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-bricks"
                    tag="h3"
                    parent="api"
                >
                    &lt;Bricks&gt;
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
                    id="el-bricks-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;BricksItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'selected', type: 'boolean' },
                        { prop: 'accented', type: 'boolean' },
                        { prop: 'fullWidth', type: 'boolean' },
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
                    id="el-bricks-item-icon"
                    tag="h3"
                    parent="api"
                >
                    &lt;BricksItemIcon&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'span'` },
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
                    id="el-bricks-item-count"
                    tag="h3"
                    parent="api"
                >
                    &lt;BricksItemCount&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'span'` },
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
import { BricksDemoExample } from '@/examples/bricks'
import { DocsLayout } from '@/layouts'
import bricksAnatomyExampleRaw from '../../examples/bricks/BricksAnatomyExample.vue?raw'
import bricksDemoExampleRaw from '../../examples/bricks/BricksDemoExample.vue?raw'
</script>
