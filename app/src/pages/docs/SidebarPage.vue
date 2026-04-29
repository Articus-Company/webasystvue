<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="sidebar"
                    tag="h1"
                >
                    Sidebar
                </DocHeading>

                <DemoCard :code="sidebarDemoExampleRaw">
                    <SidebarDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="sidebar"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="sidebarAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="sidebar"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-sidebar"
                    tag="h3"
                    parent="api"
                >
                    &lt;Sidebar&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'width', type: `'10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | 'auto' | 'adaptive-wider' | 'adaptive-widest'` },
                        { prop: 'flexbox', type: 'boolean' },
                        { prop: 'overflowVisible', type: 'boolean' },
                        { prop: 'scrollsWithContent', type: 'boolean' },
                        { prop: 'right', type: 'boolean' },
                        { prop: 'rail', type: 'boolean' },
                        { prop: 'heightAuto', type: 'boolean' },
                        { prop: 'mobileFriendly', type: 'boolean' },
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
                    id="el-sidebar-header"
                    tag="h3"
                    parent="api"
                >
                    &lt;SidebarHeader&gt;
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
                    id="el-sidebar-body"
                    tag="h3"
                    parent="api"
                >
                    &lt;SidebarBody&gt;
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
                    id="el-sidebar-footer"
                    tag="h3"
                    parent="api"
                >
                    &lt;SidebarFooter&gt;
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
                    id="el-sidebar-mobile-toggle"
                    tag="h3"
                    parent="api"
                >
                    &lt;SidebarMobileToggle&gt;
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
                    parent="sidebar"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="width-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример sidebar с изменённой шириной
                </DocHeading>

                <DemoCard
                    :code="sidebarWidthExampleRaw"
                    highlight-lines="{4}"
                >
                    <SidebarWidthExample/>
                </DemoCard>

                <DocHeading
                    id="overflow-visible-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример sidebar с атрибутом overflow-visible
                </DocHeading>

                <DemoCard
                    :code="sidebarOverflowVisibleExampleRaw"
                    highlight-lines="{2}"
                >
                    <SidebarOverflowVisibleExample/>
                </DemoCard>

                <DocHeading
                    id="rail-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример sidebar с атрибутом rail
                </DocHeading>

                <DemoCard
                    :code="sidebarRailExampleRaw"
                    highlight-lines="{4}"
                >
                    <SidebarRailExample/>
                </DemoCard>

                <DocHeading
                    id="height-auto-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример sidebar с атрибутом heightAuto
                </DocHeading>

                <DemoCard
                    :code="sidebarHeightAutoExampleRaw"
                    highlight-lines="{2}"
                >
                    <SidebarHeightAutoExample/>
                </DemoCard>

                <DocHeading
                    id="mobile-friendly-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример sidebar с атрибутом mobileFriendly
                </DocHeading>

                <Tip>
                    Чтобы увидеть эффект атрибута, нужно уменьшить экран до мобильного
                    размера, но страница не адаптирована для мобильных экранов
                    <span style="font-size: 1.3rem">
                        😿
                    </span>
                </Tip>

                <DemoCard
                    :code="sidebarMobileFriendlyExampleRaw"
                    highlight-lines="{2}"
                >
                    <SidebarMobileFriendlyExample/>
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
import { Tip } from '@/components/docs/tip'
import {
    SidebarDemoExample,
    SidebarHeightAutoExample,
    SidebarMobileFriendlyExample,
    SidebarOverflowVisibleExample,
    SidebarRailExample,
    SidebarWidthExample,
} from '@/examples/sidebar'
import sidebarAnatomyExampleRaw from '@/examples/sidebar/SidebarAnatomyExample.vue?raw'
import sidebarDemoExampleRaw from '@/examples/sidebar/SidebarDemoExample.vue?raw'
import sidebarHeightAutoExampleRaw from '@/examples/sidebar/SidebarHeightAutoExample.vue?raw'
import sidebarMobileFriendlyExampleRaw
    from '@/examples/sidebar/SidebarMobileFriendlyExample.vue?raw'
import sidebarOverflowVisibleExampleRaw
    from '@/examples/sidebar/SidebarOverflowVisibleExample.vue?raw'
import sidebarRailExampleRaw from '@/examples/sidebar/SidebarRailExample.vue?raw'
import sidebarWidthExampleRaw from '@/examples/sidebar/SidebarWidthExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
