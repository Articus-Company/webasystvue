<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="card"
                    tag="h1"
                >
                    Card
                </DocHeading>

                <DemoCard :code="cardDemoExampleRaw">
                    <CardDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="card"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="cardAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="card"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-card"
                    tag="h3"
                    parent="api"
                >
                    &lt;Card&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'figure'` },
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
                    id="el-card-image"
                    tag="h3"
                    parent="api"
                >
                    &lt;CardImage&gt;
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
                    id="el-card-details"
                    tag="h3"
                    parent="api"
                >
                    &lt;CardDetails&gt;
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
                    parent="card"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="simple-example"
                    tag="h3"
                    parent="examples"
                >
                    Простой пример
                </DocHeading>

                <DemoCard :code="cardSimpleExampleRaw">
                    <CardSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="example-with-image"
                    tag="h3"
                    parent="examples"
                >
                    Пример карточки с изображением
                </DocHeading>

                <DemoCard
                    :code="cardImageExampleRaw"
                    highlight-lines="{3,8}"
                >
                    <CardImageExample/>
                </DemoCard>

                <DocHeading
                    id="example-with-top-and-bottom-details"
                    tag="h3"
                    parent="examples"
                >
                    Пример карточки с контентом над и под изображением
                </DocHeading>

                <DemoCard
                    :code="cardWithTopAndBottomDetailsRaw"
                    highlight-lines="{3,5,12,15}"
                >
                    <CardWithTopAndBottomDetails/>
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
    CardDemoExample,
    CardImageExample,
    CardSimpleExample,
    CardWithTopAndBottomDetails,
} from '@/examples/card'
import cardAnatomyExampleRaw from '@/examples/card/CardAnatomyExample.vue?raw'
import cardDemoExampleRaw from '@/examples/card/CardDemoExample.vue?raw'
import cardImageExampleRaw from '@/examples/card/CardImageExample.vue?raw'
import cardSimpleExampleRaw from '@/examples/card/CardSimpleExample.vue?raw'
import cardWithTopAndBottomDetailsRaw from '@/examples/card/CardWithTopAndBottomDetails.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
