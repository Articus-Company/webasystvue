<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="chips"
                    tag="h1"
                >
                    Chips
                </DocHeading>

                <DemoCard :code="chipsDemoExampleRaw">
                    <div style="width: 566px">
                        <ChipsDemoExample/>
                    </div>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="chips"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="chipsAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="chips"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-chips"
                    tag="h3"
                    parent="api"
                >
                    &lt;Chips&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest' },
                        { prop: 'outlined', type: 'boolean' },
                        { prop: 'rounded', type: 'boolean' },
                        { prop: 'transparent', type: 'boolean' },
                        { prop: 'tags', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-chips-section"
                    tag="h3"
                    parent="api"
                >
                    &lt;ChipsSection&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest' },
                        { prop: 'outlined', type: 'boolean' },
                        { prop: 'rounded', type: 'boolean' },
                        { prop: 'transparent', type: 'boolean' },
                        { prop: 'tag', type: 'boolean' },
                        { prop: 'accented', type: 'boolean' },
                        { prop: 'selected', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-chips-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;ChipsItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-chips-item-count"
                    tag="h3"
                    parent="api"
                >
                    &lt;ChipsItemCount&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'span'` },
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
                    parent="chips"
                >
                    Рекомендации
                </DocHeading>

                <p>
                    Рекомендуется создать компонент обёртку над <code>ChipsSection</code> и
                    <code>ChipsItem</code> для уменьшения boilerplate кода
                </p>

                <CodeVueHighlighter :code="chipsSectionItemWrapperExampleRaw"/>

                <DocHeading
                    id="examples"
                    tag="h2"
                    parent="chips"
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

                <DemoCard :code="chipsSimpleExampleRaw">
                    <ChipsSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="sizes-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример чипсов с разным размером
                </DocHeading>

                <DemoCard
                    :code="chipsSizesExampleRaw"
                    highlight-lines="{7,16}"
                >
                    <ChipsSizesExample/>
                </DemoCard>

                <DocHeading
                    id="outlined-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример outlined чипсов
                </DocHeading>

                <DemoCard
                    :code="chipsOutlinedExampleRaw"
                    highlight-lines="{3,29,37,45,53}"
                >
                    <ChipsOutlinedExample/>
                </DemoCard>

                <DocHeading
                    id="rounded-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример rounded чипсов
                </DocHeading>

                <DemoCard
                    :code="chipsRoundedExampleRaw"
                    highlight-lines="{3,16,24,32,40}"
                >
                    <ChipsRoundedExample/>
                </DemoCard>

                <DocHeading
                    id="transparent-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример transparent чипсов
                </DocHeading>

                <DemoCard
                    :code="chipsTransparentExampleRaw"
                    highlight-lines="{3,16,21,26,31}"
                >
                    <ChipsTransparentExample/>
                </DemoCard>

                <DocHeading
                    id="tags-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример tags чипсов
                </DocHeading>

                <DemoCard
                    :code="chipsTagsExampleRaw"
                    highlight-lines="{3,17,23,29,35}"
                >
                    <ChipsTagsExample/>
                </DemoCard>

                <DocHeading
                    id="accented-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример accented чипсов
                </DocHeading>

                <DemoCard
                    :code="chipsAccentedExampleRaw"
                    highlight-lines="{3,8,13,18}"
                >
                    <ChipsAccentedExample/>
                </DemoCard>

                <DocHeading
                    id="selected-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример selected чипсов
                </DocHeading>

                <DemoCard
                    :code="chipsSelectedExampleRaw"
                    highlight-lines="{3,8,13,18}"
                >
                    <ChipsSelectedExample/>
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
    ChipsAccentedExample,
    ChipsDemoExample,
    ChipsOutlinedExample,
    ChipsRoundedExample,
    ChipsSelectedExample,
    ChipsSimpleExample,
    ChipsSizesExample,
    ChipsTagsExample,
    ChipsTransparentExample,
} from '@/examples/chips'
import chipsAccentedExampleRaw from '@/examples/chips/ChipsAccentedExample.vue?raw'
import chipsAnatomyExampleRaw from '@/examples/chips/ChipsAnatomyExample.vue?raw'
import chipsDemoExampleRaw from '@/examples/chips/ChipsDemoExample.vue?raw'
import chipsOutlinedExampleRaw from '@/examples/chips/ChipsOutlinedExample.vue?raw'
import chipsRoundedExampleRaw from '@/examples/chips/ChipsRoundedExample.vue?raw'
import chipsSectionItemWrapperExampleRaw
    from '@/examples/chips/ChipsSectionItemWrapperExample.vue?raw'
import chipsSelectedExampleRaw from '@/examples/chips/ChipsSelectedExample.vue?raw'
import chipsSimpleExampleRaw from '@/examples/chips/ChipsSimpleExample.vue?raw'
import chipsSizesExampleRaw from '@/examples/chips/ChipsSizesExample.vue?raw'
import chipsTagsExampleRaw from '@/examples/chips/ChipsTagsExample.vue?raw'
import chipsTransparentExampleRaw from '@/examples/chips/ChipsTransparentExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
