<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="bottombar"
                    tag="h1"
                >
                    Bottombar
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="bottombar"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="bottombarAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="bottombar"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-bottombar"
                    tag="h3"
                    parent="api"
                >
                    &lt;Bottombar&gt;
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
                    id="el-bottombar-list"
                    tag="h3"
                    parent="api"
                >
                    &lt;BottombarList&gt;
                </DocHeading>

                <p>
                    Компонент не имеет собственного API.
                    Всегда рендерит <code>ul</code>
                </p>

                <DocHeading
                    id="el-bottombar-list-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;BottombarListItem&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'li'` },
                        { prop: 'asChild' },
                        { prop: 'selected', type: 'boolean' },
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
                    parent="bottombar"
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

                <CodeVueHighlighter :code="bottombarSimpleExampleRaw"/>
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
import { DocHeading } from '@/components/docs/doc-heading'
import bottombarAnatomyExampleRaw from '@/examples/bottombar/BottombarAnatomyExample.vue?raw'
import bottombarSimpleExampleRaw from '@/examples/bottombar/BottombarSimpleExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
