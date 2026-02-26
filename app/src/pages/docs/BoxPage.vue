<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="box"
                    tag="h1"
                >
                    Box
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="box"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="boxAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="box"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-box"
                    tag="h3"
                    parent="api"
                >
                    &lt;Box&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'contentbox', type: 'boolean', desc: 'Добавить внутренние отступы' },
                        { prop: 'rounded', type: 'boolean', desc: 'Добавить округление' },
                        { prop: 'uploadbox', type: 'boolean', desc: 'Оформление блока для драг-н-дропа файлов' },
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
                    parent="box"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="example-contentbox"
                    tag="h3"
                    parent="examples"
                >
                    Пример с contentbox
                </DocHeading>

                <DemoCard :code="boxContentboxExampleRaw">
                    <BoxContentboxExample/>
                </DemoCard>

                <DocHeading
                    id="example-rounded"
                    tag="h3"
                    parent="examples"
                >
                    Пример с rounded
                </DocHeading>

                <DemoCard :code="boxRoundedExampleRaw">
                    <BoxRoundedExample/>
                </DemoCard>

                <DocHeading
                    id="example-uploadbox"
                    tag="h3"
                    parent="examples"
                >
                    Пример с uploadbox
                </DocHeading>

                <DemoCard :code="boxUploadboxExampleRaw">
                    <BoxUploadboxExample/>
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
import { BoxContentboxExample, BoxRoundedExample, BoxUploadboxExample } from '@/examples/box'
import boxAnatomyExampleRaw from '@/examples/box/BoxAnatomyExample.vue?raw'
import boxContentboxExampleRaw from '@/examples/box/BoxContentboxExample.vue?raw'
import boxRoundedExampleRaw from '@/examples/box/BoxRoundedExample.vue?raw'
import boxUploadboxExampleRaw from '@/examples/box/BoxUploadboxExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
