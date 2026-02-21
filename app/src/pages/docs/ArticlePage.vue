<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="article"
                    tag="h1"
                >
                    Article
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="article"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="articleAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="article"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-article"
                    tag="h3"
                    parent="api"
                >
                    &lt;Article&gt;
                </DocHeading>

                <p>Основной элемент компонента Article</p>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'shadowed', type: 'boolean', desc: 'Добавить тень' },
                        { prop: 'wide', type: 'boolean', desc: 'Сделать article шире' },
                        { prop: 'wider', type: 'boolean', desc: 'Сделать article ещё шире' },
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
                    id="el-article-header"
                    tag="h3"
                    parent="api"
                >
                    &lt;ArticleHeader&gt;
                </DocHeading>

                <p>Заголовок Article</p>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'fullWidth', type: 'boolean', desc: 'Убирает поля слева и справа' },
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
                    id="el-article-body"
                    tag="h3"
                    parent="api"
                >
                    &lt;ArticleBody&gt;
                </DocHeading>

                <p>Основной контент Article</p>

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
                    id="el-article-footer"
                    tag="h3"
                    parent="api"
                >
                    &lt;ArticleFooter&gt;
                </DocHeading>

                <p>Подвал Article</p>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'fullWidth', type: 'boolean', desc: 'Убирает поля слева и справа' },
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

                <CodeVueHighlighter :code="articleSimpleExampleRaw"/>

                <DocHeading
                    id="simple-footer-header"
                    tag="h3"
                    parent="examples"
                >
                    Пример с header и footer
                </DocHeading>

                <CodeVueHighlighter :code="articleHeaderFooterExampleRaw"/>
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
import articleAnatomyExampleRaw from '@/examples/article/ArticleAnatomyExample.vue?raw'
import articleHeaderFooterExampleRaw from '@/examples/article/ArticleHeaderFooterExample.vue?raw'
import articleSimpleExampleRaw from '@/examples/article/ArticleSimpleExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
