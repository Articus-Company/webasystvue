<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="banner"
                    tag="h1"
                >
                    Banner
                </DocHeading>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="banner"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="bannerAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="banner"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-banner"
                    tag="h3"
                    parent="api"
                >
                    &lt;Banner&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'static', type: 'boolean', desc: 'Вывести баннер без абсолютного позиционирования среди других компонентов' },
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
                    id="el-banner-close"
                    tag="h3"
                    parent="api"
                >
                    &lt;BannerClose&gt;
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
                    id="examples"
                    tag="h2"
                    parent="banner"
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

                <CodeVueHighlighter :code="bannerSimpleExampleRaw"/>
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
import bannerAnatomyExampleRaw from '@/examples/banner/BannerAnatomyExample.vue?raw'
import bannerSimpleExampleRaw from '@/examples/banner/BannerSimpleExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
