<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="breadcrumbs"
                    tag="h1"
                >
                    Breadcrumbs
                </DocHeading>

                <DemoCard :code="breadcrumbsDemoExampleRaw">
                    <BreadcrumbsDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="breadcrumbs"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="breadcrumbsAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="breadcrumbs"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-breadcrumbs"
                    tag="h3"
                    parent="api"
                >
                    &lt;Breadcrumbs&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[{ prop: 'asChild' }]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-breadcrumbs-section"
                    tag="h3"
                    parent="api"
                >
                    &lt;BreadcrumbsSection&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'active', type: 'boolean' },
                        { prop: 'asChild' },
                    ]"
                >
                    <template #type-1>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-breadcrumbs-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;BreadcrumbsItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'a'` },
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
import { BreadcrumbsDemoExample } from '@/examples/breadcrumbs'
import breadcrumbsAnatomyExampleRaw from '@/examples/breadcrumbs/BreadcrumbsAnatomyExample.vue?raw'
import breadcrumbsDemoExampleRaw from '@/examples/breadcrumbs/BreadcrumbsDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
