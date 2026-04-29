<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="skeleton"
                    tag="h1"
                >
                    Skeleton
                </DocHeading>

                <DemoCard :code="skeletonDemoExampleRaw">
                    <SkeletonDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="skeleton"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="skeletonAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="skeleton"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-skeleton"
                    tag="h3"
                    parent="api"
                >
                    &lt;Skeleton&gt;
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
                    id="el-skeleton-custom-box"
                    tag="h3"
                    parent="api"
                >
                    &lt;SkeletonCustomBox&gt;
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
                    id="el-skeleton-custom-circle"
                    tag="h3"
                    parent="api"
                >
                    &lt;SkeletonCustomCircle&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'size', type: `'48' | '96' | '144' | '192'` },
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
                    id="el-skeleton-header"
                    tag="h3"
                    parent="api"
                >
                    &lt;SkeletonHeader&gt;
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
                    id="el-skeleton-line"
                    tag="h3"
                    parent="api"
                >
                    &lt;SkeletonLine&gt;
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
                    id="el-skeleton-list"
                    tag="h3"
                    parent="api"
                >
                    &lt;SkeletonList&gt;
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
import { SkeletonDemoExample } from '@/examples/skeleton'
import skeletonAnatomyExampleRaw from '@/examples/skeleton/SkeletonAnatomyExample.vue?raw'
import skeletonDemoExampleRaw from '@/examples/skeleton/SkeletonDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
