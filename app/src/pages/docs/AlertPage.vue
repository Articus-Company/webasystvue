<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="alert"
                    tag="h1"
                >
                    Alert
                </DocHeading>

                <DemoCard :code="alertDemoExampleRaw">
                    <AlertDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="alert"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="alertAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="alert"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-alert"
                    tag="h3"
                    parent="api"
                >
                    &lt;Alert&gt;
                </DocHeading>

                <p>Основной элемент компонента Alert</p>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest', desc: 'Размер алерта' },
                        { prop: 'type', type: 'success | danger | warning | info | outlined', desc: 'Статус алерта' },
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
                    id="el-alert-close"
                    tag="h3"
                    parent="api"
                >
                    &lt;AlertClose&gt;
                </DocHeading>

                <p>Элемент для размещения в нём кнопки закрытия</p>

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
                    id="el-alert-fixed-box"
                    tag="h3"
                    parent="api"
                >
                    &lt;AlertFixedBox&gt;
                </DocHeading>

                <p>Элемент для размещения одного или несколько алертов в один блок</p>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'bottom', type: 'boolean', desc: 'Располагать в правом нижем углу' },
                        { prop: 'large', type: 'boolean', desc: 'Увеличенный размер контейнера' },
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
                    parent="alert"
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

                <DemoCard :code="alertSimpleExampleRaw">
                    <AlertSimpleExample/>
                </DemoCard>

                <DocHeading
                    id="example-alert-close"
                    tag="h3"
                    parent="examples"
                >
                    Пример с кнопкой закрытия
                </DocHeading>

                <p>Рекомендуется использовать <code>&lt;AlertClose&gt;</code> для размещения в нём кнопки закрытия</p>

                <DemoCard
                    :code="alertCloseExampleRaw"
                    highlight-lines="{4,9}"
                >
                    <AlertCloseExample/>
                </DemoCard>

                <DocHeading
                    id="example-alert-fixed-box"
                    tag="h3"
                    parent="examples"
                >
                    Пример с общим блоком
                </DocHeading>

                <p>Воспользуйтесь <code>&lt;AlertFixedBox&gt;</code> для размещения элементов друг над другом в общем блоке</p>

                <DemoCard
                    :code="alertFixedBoxExampleRaw"
                    highlight-lines="{2,9}"
                >
                    <div style="transform: translate(12.5rem, -16.5rem); width: 400px;">
                        <AlertFixedBoxExample/>
                    </div>
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
    AlertCloseExample,
    AlertDemoExample,
    AlertFixedBoxExample,
    AlertSimpleExample,
} from '@/examples/alert'
import alertAnatomyExampleRaw from '@/examples/alert/AlertAnatomyExample.vue?raw'
import alertCloseExampleRaw from '@/examples/alert/AlertCloseExample.vue?raw'
import alertDemoExampleRaw from '@/examples/alert/AlertDemoExample.vue?raw'
import alertFixedBoxExampleRaw from '@/examples/alert/AlertFixedBoxExample.vue?raw'
import alertSimpleExampleRaw from '@/examples/alert/AlertSimpleExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
