<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="badge"
                    tag="h1"
                >
                    Badge
                </DocHeading>

                <DemoCard :code="badgeDemoExampleRaw">
                    <BadgeDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="badge"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="badgeAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="badge"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-badge"
                    tag="h3"
                    parent="api"
                >
                    &lt;Badge&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'span'` },
                        { prop: 'asChild' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest', desc: 'Размер бейджа' },
                        { prop: 'color', type: 'red | green | blue | yellow | orange | purple | brown | pink | white | black | gray | light-gray | dark-gray', desc: 'Цвет бейджа' },
                        { prop: 'user', type: 'boolean' },
                        { prop: 'squared', type: 'boolean', desc: 'Малое скругление углов' },
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
import { BadgeDemoExample } from '@/examples/badge'
import badgeAnatomyExampleRaw from '@/examples/badge/BadgeAnatomyExample.vue?raw'
import badgeDemoExampleRaw from '@/examples/badge/BadgeDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
