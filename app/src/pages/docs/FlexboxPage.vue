<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="flexbox"
                    tag="h1"
                >
                    Flexbox
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="flexbox"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="flexboxAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="flexbox"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-flexbox"
                    tag="h3"
                    parent="api"
                >
                    &lt;Flexbox&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'space', type: '0  | 4  | 8  | 12  | 16  | 20  | 24  | 32  | 40  | 48' },
                        { prop: 'middle', type: 'boolean' },
                        { prop: 'fullWidth', type: 'boolean' },
                        { prop: 'fixed', type: 'boolean' },
                        { prop: 'vertical', type: 'boolean' },
                        { prop: 'verticalMobile', type: 'boolean' },
                        { prop: 'wrap', type: 'boolean' },
                        { prop: 'wrapMobile', type: 'boolean' },
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
                    parent="flexbox"
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

                <DemoCard :code="flexboxSimpleExampleRaw">
                    <FlexboxSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="space-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с space
                </DocHeading>

                <DemoCard
                    :code="flexboxSpaceExampleRaw"
                    highlight-lines="{4}"
                >
                    <FlexboxSpaceExample/>
                </DemoCard>

                <DocHeading
                    id="middle-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с middle
                </DocHeading>

                <DemoCard
                    :code="flexboxMiddleExampleRaw"
                    highlight-lines="{4}"
                >
                    <FlexboxMiddleExample/>
                </DemoCard>

                <DocHeading
                    id="full-width-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с fullWidth
                </DocHeading>

                <DemoCard
                    :code="flexboxFullWidthExampleRaw"
                    highlight-lines="{5}"
                >
                    <FlexboxFullWidthExample/>
                </DemoCard>

                <DocHeading
                    id="fixed-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с fixed
                </DocHeading>

                <DemoCard
                    :code="flexboxFixedExampleRaw"
                    highlight-lines="{5}"
                >
                    <FlexboxFixedExample/>
                </DemoCard>

                <DocHeading
                    id="vertical-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с vertical
                </DocHeading>

                <DemoCard
                    :code="flexboxVerticalExampleRaw"
                    highlight-lines="{4}"
                >
                    <FlexboxVerticalExample/>
                </DemoCard>

                <DocHeading
                    id="wrap-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с wrap
                </DocHeading>

                <DemoCard
                    :code="flexboxWrapExampleRaw"
                    highlight-lines="{4}"
                >
                    <FlexboxWrapExample/>
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
    FlexboxFixedExample,
    FlexboxFullWidthExample,
    FlexboxMiddleExample,
    FlexboxSimpleExample,
    FlexboxSpaceExample,
    FlexboxVerticalExample,
    FlexboxWrapExample,
} from '@/examples/flexbox'
import flexboxAnatomyExampleRaw from '@/examples/flexbox/FlexboxAnatomyExample.vue?raw'
import flexboxFixedExampleRaw from '@/examples/flexbox/FlexboxFixedExample.vue?raw'
import flexboxFullWidthExampleRaw from '@/examples/flexbox/FlexboxFullWidthExample.vue?raw'
import flexboxMiddleExampleRaw from '@/examples/flexbox/FlexboxMiddleExample.vue?raw'
import flexboxSimpleExampleRaw from '@/examples/flexbox/FlexboxSimpleExample.vue?raw'
import flexboxSpaceExampleRaw from '@/examples/flexbox/FlexboxSpaceExample.vue?raw'
import flexboxVerticalExampleRaw from '@/examples/flexbox/FlexboxVerticalExample.vue?raw'
import flexboxWrapExampleRaw from '@/examples/flexbox/FlexboxWrapExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
