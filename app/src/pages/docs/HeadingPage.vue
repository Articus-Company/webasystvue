<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="heading"
                    tag="h1"
                >
                    Heading
                </DocHeading>

                <DemoCard :code="headingDemoExampleRaw">
                    <HeadingDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="heading"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="headingAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="heading"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-heading"
                    tag="h3"
                    parent="api"
                >
                    &lt;Heading&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'black', type: 'boolean' },
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
                    id="el-heading-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;HeadingItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'span'` },
                        { prop: 'asChild' },
                        { prop: 'action', type: 'boolean' },
                        { prop: 'count', type: 'boolean' },
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
                    id="el-caret-wrapper"
                    tag="h3"
                    parent="api"
                >
                    &lt;HeadingCaretWrapper&gt;
                </DocHeading>

                Компонент не имеет API всегда рендерит <code>span</code>

                <DocHeading
                    id="el-caret"
                    tag="h3"
                    parent="api"
                >
                    &lt;HeadingCaret&gt;
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

                <DocHeading
                    id="recommendations"
                    tag="h2"
                    parent="heading"
                >
                    Рекомендации
                </DocHeading>

                <p>
                    Рекомендуется создать компонент обёртку над <code>HeadingCaretWrapper</code> и
                    <code>HeadingCaret</code> для уменьшения boilerplate кода
                </p>

                <CodeVueHighlighter :code="headingCaretWrapperExampleRaw"/>

                <DocHeading
                    id="examples"
                    tag="h2"
                    parent="heading"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="black-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример явного выделения заголовка цветом
                </DocHeading>

                <DemoCard
                    :code="headingBlackExampleRaw"
                    highlight-lines="{2}"
                >
                    <HeadingBlackExample/>
                </DemoCard>

                <DocHeading
                    id="action-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример явного выделения иконки цветом
                </DocHeading>

                <DemoCard
                    :code="headingActionExampleRaw"
                    highlight-lines="{7}"
                >
                    <HeadingActionExample/>
                </DemoCard>

                <DocHeading
                    id="count-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример расположения элементов справа
                </DocHeading>

                <DemoCard
                    :code="headingCountExampleRaw"
                    highlight-lines="{8,12,15}"
                >
                    <HeadingCountExample/>
                </DemoCard>

                <DocHeading
                    id="caret-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример со "сворачивалкой"
                </DocHeading>

                <DemoCard
                    :code="headingCaretExampleRaw"
                    highlight-lines="{4,5,7,8}"
                >
                    <HeadingCaretExample/>
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
    HeadingActionExample,
    HeadingBlackExample,
    HeadingCaretExample,
    HeadingCountExample,
    HeadingDemoExample,
} from '@/examples/heading'
import headingActionExampleRaw from '@/examples/heading/HeadingActionExample.vue?raw'
import headingAnatomyExampleRaw from '@/examples/heading/HeadingAnatomyExample.vue?raw'
import headingBlackExampleRaw from '@/examples/heading/HeadingBlackExample.vue?raw'
import headingCaretExampleRaw from '@/examples/heading/HeadingCaretExample.vue?raw'
import headingCaretWrapperExampleRaw from '@/examples/heading/HeadingCaretWrapperExample.vue?raw'
import headingCountExampleRaw from '@/examples/heading/HeadingCountExample.vue?raw'
import headingDemoExampleRaw from '@/examples/heading/HeadingDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
