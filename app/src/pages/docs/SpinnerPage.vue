<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="spinner"
                    tag="h1"
                >
                    Spinner
                </DocHeading>

                <DemoCard :code="spinnerDemoExampleRaw">
                    <SpinnerDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="spinner"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="spinnerAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="spinner"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-spinner"
                    tag="h3"
                    parent="api"
                >
                    &lt;Spinner&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'size', type: '0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48' },
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
                    parent="spinner"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="size-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием size
                </DocHeading>

                <DemoCard
                    :code="spinnerSizeExampleRaw"
                    highlight-lines="{2}"
                >
                    <SpinnerSizeExample/>
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
    SpinnerDemoExample,
    SpinnerSizeExample,
} from '@/examples/spinner'
import spinnerAnatomyExampleRaw from '@/examples/spinner/SpinnerAnatomyExample.vue?raw'
import spinnerDemoExampleRaw from '@/examples/spinner/SpinnerDemoExample.vue?raw'
import spinnerSizeExampleRaw from '@/examples/spinner/SpinnerSizeExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
