<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="menu"
                    tag="h1"
                >
                    Menu
                </DocHeading>

                <DemoCard :code="menuDemoExampleRaw">
                    <MenuDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="menu"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="menuAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="menu"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-menu"
                    tag="h3"
                    parent="api"
                >
                    &lt;Menu&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'ellipsis', type: 'boolean' },
                        { prop: 'breakWords', type: 'boolean' },
                        { prop: 'large', type: 'boolean' },
                        { prop: 'mobileFriendly', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-menu-section"
                    tag="h3"
                    parent="api"
                >
                    &lt;MenuSection&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'selected', type: 'boolean' },
                        { prop: 'accented', type: 'boolean' },
                        { prop: 'rounded', type: 'boolean' },
                        { prop: 'topPadded', type: 'boolean' },
                        { prop: 'bottomPadded', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-menu-item"
                    tag="h3"
                    parent="api"
                >
                    &lt;MenuItem&gt;
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
                    id="el-menu-item-count"
                    tag="h3"
                    parent="api"
                >
                    &lt;MenuItemCount&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'action', type: 'boolean' },
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
                    parent="menu"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="example-large"
                    tag="h3"
                    parent="examples"
                >
                    Пример меню большого размера
                </DocHeading>

                <DemoCard
                    :code="menuLargeExampleRaw"
                    highlight-lines="{4}"
                >
                    <MenuLargeExample/>
                </DemoCard>

                <DocHeading
                    id="example-ellipsis"
                    tag="h3"
                    parent="examples"
                >
                    Пример меню с использованием ellipsis
                </DocHeading>

                <DemoCard
                    :code="menuEllipsisExampleRaw"
                    highlight-lines="{4}"
                >
                    <MenuEllipsisExample/>
                </DemoCard>

                <DocHeading
                    id="example-break-words"
                    tag="h3"
                    parent="examples"
                >
                    Пример меню с использованием breakWords
                </DocHeading>

                <DemoCard
                    :code="menuBreakWordsExampleRaw"
                    highlight-lines="{4}"
                >
                    <MenuBreakWordsExample/>
                </DemoCard>

                <DocHeading
                    id="example-mobile-friendly"
                    tag="h3"
                    parent="examples"
                >
                    Пример меню с использованием mobileFriendly
                </DocHeading>

                <DemoCard
                    :code="menuMobileFriendlyExampleRaw"
                    highlight-lines="{4}"
                >
                    <MenuMobileFriendlyExample/>
                </DemoCard>

                <DocHeading
                    id="example-section-selected"
                    tag="h3"
                    parent="examples"
                >
                    Пример элемента меню с использованием selected
                </DocHeading>

                <DemoCard
                    :code="menuSectionSelectedExampleRaw"
                    highlight-lines="{8}"
                >
                    <MenuSectionSelectedExample/>
                </DemoCard>

                <DocHeading
                    id="example-section-accented"
                    tag="h3"
                    parent="examples"
                >
                    Пример элемента меню с использованием accented
                </DocHeading>

                <DemoCard
                    :code="menuSectionAccentedExampleRaw"
                    highlight-lines="{8}"
                >
                    <MenuSectionAccentedExample/>
                </DemoCard>

                <DocHeading
                    id="example-section-rounded"
                    tag="h3"
                    parent="examples"
                >
                    Пример элемента меню с использованием rounded
                </DocHeading>

                <DemoCard
                    :code="menuSectionRoundedExampleRaw"
                    highlight-lines="{10}"
                >
                    <MenuSectionRoundedExample/>
                </DemoCard>

                <DocHeading
                    id="example-section-bottom-padded"
                    tag="h3"
                    parent="examples"
                >
                    Пример элемента меню с использованием bottomPadded
                </DocHeading>

                <DemoCard
                    :code="menuSectionBottomPaddedExampleRaw"
                    highlight-lines="{3}"
                >
                    <MenuSectionBottomPaddedExample/>
                </DemoCard>

                <DocHeading
                    id="example-section-top-padded"
                    tag="h3"
                    parent="examples"
                >
                    Пример элемента меню с использованием topPadded
                </DocHeading>

                <DemoCard
                    :code="menuSectionTopPaddedExampleRaw"
                    highlight-lines="{18}"
                >
                    <MenuSectionTopPaddedExample/>
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
    MenuBreakWordsExample,
    MenuDemoExample,
    MenuEllipsisExample,
    MenuLargeExample,
    MenuMobileFriendlyExample,
    MenuSectionAccentedExample,
    MenuSectionBottomPaddedExample,
    MenuSectionRoundedExample,
    MenuSectionSelectedExample,
    MenuSectionTopPaddedExample,
} from '@/examples/menu'
import menuAnatomyExampleRaw from '@/examples/menu/MenuAnatomyExample.vue?raw'
import menuBreakWordsExampleRaw from '@/examples/menu/MenuBreakWordsExample.vue?raw'
import menuDemoExampleRaw from '@/examples/menu/MenuDemoExample.vue?raw'
import menuEllipsisExampleRaw from '@/examples/menu/MenuEllipsisExample.vue?raw'
import menuLargeExampleRaw from '@/examples/menu/MenuLargeExample.vue?raw'
import menuMobileFriendlyExampleRaw from '@/examples/menu/MenuMobileFriendlyExample.vue?raw'
import menuSectionAccentedExampleRaw from '@/examples/menu/MenuSectionAccentedExample.vue?raw'
import menuSectionBottomPaddedExampleRaw from '@/examples/menu/MenuSectionBottomPaddedExample.vue?raw'
import menuSectionRoundedExampleRaw from '@/examples/menu/MenuSectionRoundedExample.vue?raw'
import menuSectionSelectedExampleRaw from '@/examples/menu/MenuSectionSelectedExample.vue?raw'
import menuSectionTopPaddedExampleRaw from '@/examples/menu/MenuSectionTopPaddedExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
