<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="tabs"
                    tag="h1"
                >
                    Tabs
                </DocHeading>

                <DemoCard :code="tabsDemoExampleRaw">
                    <TabsDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="tabs"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="tabsAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="tabs"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-tabs"
                    tag="h3"
                    parent="api"
                >
                    &lt;Tabs&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'size', type: `'smallest' | 'smaller' | 'small' | 'large' | 'larger' | 'largest'` },
                        { prop: 'borderedBottom', type: 'boolean' },
                        { prop: 'overflowDropdown', type: 'boolean' },
                        { prop: 'overflowArrows', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-tabs-section"
                    tag="h3"
                    parent="api"
                >
                    &lt;TabsSection&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'selected', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-tabs-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;TabsItem&gt;
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
                    id="el-tabs-item-count"
                    tag="h3"
                    parent="api"
                >
                    &lt;TabsItemCount&gt;
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
                    parent="tabs"
                >
                    Рекомендации
                </DocHeading>

                <p>
                    Рекомендуется создать компонент обёртку над <code>TabsSection</code> и
                    <code>TabsItem</code> для уменьшения boilerplate кода
                </p>

                <CodeVueHighlighter :code="tabsSectionItemWrapperExampleRaw"/>
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
import { TabsDemoExample } from '@/examples/tabs'
import tabsAnatomyExampleRaw from '@/examples/tabs/TabsAnatomyExample.vue?raw'
import tabsDemoExampleRaw from '@/examples/tabs/TabsDemoExample.vue?raw'
import tabsSectionItemWrapperExampleRaw from '@/examples/tabs/TabsSectionItemWrapperExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
