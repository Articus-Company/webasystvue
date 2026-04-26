<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="icon"
                    tag="h1"
                >
                    Icon
                </DocHeading>

                <DemoCard :code="iconDemoExampleRaw">
                    <IconDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="icon"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="iconAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="icon"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-icon"
                    tag="h3"
                    parent="api"
                >
                    &lt;Icon&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 48 | 64 | 72 | 80 | 96' },
                        { prop: 'shift', type: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8' },
                        { prop: 'top', type: 'boolean' },
                        { prop: 'baseline', type: 'boolean' },
                        { prop: 'middle', type: 'boolean' },
                        { prop: 'userpic', type: 'boolean' },
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
                    parent="icon"
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

                <DemoCard :code="iconSimpleExampleRaw">
                    <IconSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="sizes-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием size
                </DocHeading>

                <DemoCard
                    :code="iconSizesExampleRaw"
                    highlight-lines="{2,5,8,11,14,17}"
                >
                    <IconSizesExample/>
                </DemoCard>

                <DocHeading
                    id="shift-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием shift
                </DocHeading>

                <DemoCard
                    :code="iconShiftExampleRaw"
                    highlight-lines="{2,5,8,11,14,17}"
                >
                    <IconShiftExample/>
                </DemoCard>

                <DocHeading
                    id="top-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием top
                </DocHeading>

                <DemoCard
                    :code="iconTopExampleRaw"
                    highlight-lines="{4,10,16,22,28,34}"
                >
                    <IconTopExample/>
                </DemoCard>

                <DocHeading
                    id="baseline-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием baseline
                </DocHeading>

                <DemoCard
                    :code="iconBaselineExampleRaw"
                    highlight-lines="{4,10,16,22,28,34}"
                >
                    <IconBaselineExample/>
                </DemoCard>

                <DocHeading
                    id="middle-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием middle
                </DocHeading>

                <DemoCard
                    :code="iconMiddleExampleRaw"
                    highlight-lines="{4,10,16,22,28,34}"
                >
                    <IconMiddleExample/>
                </DemoCard>

                <DocHeading
                    id="userpic-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример с использованием userpic
                </DocHeading>

                <DemoCard
                    :code="iconUserpicExampleRaw"
                    highlight-lines="{3,9,17,28,39}"
                >
                    <IconUserpicExample/>
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
    IconBaselineExample,
    IconDemoExample,
    IconMiddleExample,
    IconShiftExample,
    IconSimpleExample,
    IconSizesExample,
    IconTopExample,
    IconUserpicExample,
} from '@/examples/icon'
import iconAnatomyExampleRaw from '@/examples/icon/IconAnatomyExample.vue?raw'
import iconBaselineExampleRaw from '@/examples/icon/IconBaselineExample.vue?raw'
import iconDemoExampleRaw from '@/examples/icon/IconDemoExample.vue?raw'
import iconMiddleExampleRaw from '@/examples/icon/IconMiddleExample.vue?raw'
import iconShiftExampleRaw from '@/examples/icon/IconShiftExample.vue?raw'
import iconSimpleExampleRaw from '@/examples/icon/IconSimpleExample.vue?raw'
import iconSizesExampleRaw from '@/examples/icon/IconSizesExample.vue?raw'
import iconTopExampleRaw from '@/examples/icon/IconTopExample.vue?raw'
import iconUserpicExampleRaw from '@/examples/icon/IconUserpicExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
