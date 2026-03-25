<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="button"
                    tag="h1"
                >
                    Button
                </DocHeading>

                <DemoCard :code="buttonDemoExampleRaw">
                    <ButtonDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="button"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="buttonAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="button"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-button"
                    tag="h3"
                    parent="api"
                >
                    &lt;Button&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'button'` },
                        { prop: 'asChild' },
                        { prop: 'color', type: 'red | green | blue | yellow | orange | purple | brown | pink | white | black | gray | light-gray | dark-gray | danger | warning | success' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest' },
                        { prop: 'outlined', type: 'boolean' },
                        { prop: 'rounded', type: 'boolean' },
                        { prop: 'nobutton', type: 'boolean' },
                        { prop: 'fullWidth', type: 'boolean' },
                        { prop: 'gradient', type: 'boolean' },
                        { prop: 'circle', type: 'boolean' },
                        { prop: 'disabled', type: 'boolean' },
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
import { ButtonDemoExample } from '@/examples/button'
import { DocsLayout } from '@/layouts'
import buttonAnatomyExampleRaw from '../../examples/button/ButtonAnatomyExample.vue?raw'
import buttonDemoExampleRaw from '../../examples/button/ButtonDemoExample.vue?raw'
</script>
