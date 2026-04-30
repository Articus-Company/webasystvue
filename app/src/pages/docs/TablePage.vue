<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="table"
                    tag="h1"
                >
                    Table
                </DocHeading>

                <DemoCard :code="tableDemoExampleRaw">
                    <TableDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="table"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="tableAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="table"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-table"
                    tag="h3"
                    parent="api"
                >
                    &lt;Table&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'size', type: `'smallest' | 'smaller' | 'small' | 'large' | 'larger' | 'largest'` },
                        { prop: 'bigdata', type: 'boolean' },
                        { prop: 'zebra', type: 'boolean' },
                        { prop: 'bordered', type: 'boolean' },
                        { prop: 'borderless', type: 'boolean' },
                        { prop: 'singleLined', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-table-body"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableBody&gt;
                </DocHeading>

                <p>Компонент не имеет своего API, всегда рендерит <code>tbody</code></p>

                <DocHeading
                    id="el-table-caption"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableCaption&gt;
                </DocHeading>

                <p>Компонент не имеет своего API, всегда рендерит <code>caption</code></p>

                <DocHeading
                    id="el-table-cell"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableCell&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'align', type: `'left' | 'center' | 'right' | 'left-mobile' | 'center-mobile' | 'right-mobile'` },
                        { prop: 'verticalAlign', type: `'top' | 'middle' | 'bottom'` },
                        { prop: 'minWidth', type: 'boolean' },
                        { prop: 'maxWidth', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-table-footer"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableFooter&gt;
                </DocHeading>

                <p>Компонент не имеет своего API, всегда рендерит <code>tfoot</code></p>

                <DocHeading
                    id="el-table-head"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableHead&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'asChild' },
                        { prop: 'align', type: `'left' | 'center' | 'right' | 'left-mobile' | 'center-mobile' | 'right-mobile'` },
                        { prop: 'verticalAlign', type: `'top' | 'middle' | 'bottom'` },
                        { prop: 'minWidth', type: 'boolean' },
                        { prop: 'maxWidth', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>

                <DocHeading
                    id="el-table-header"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableHeader&gt;
                </DocHeading>

                <p>Компонент не имеет своего API, всегда рендерит <code>thead</code></p>

                <DocHeading
                    id="el-table-row"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableRow&gt;
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
                    id="el-table-scrollable-x"
                    tag="h3"
                    parent="api"
                >
                    &lt;TableScrollableX&gt;
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
                    parent="table"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="align-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример выравнивания содержимого в ячейках
                </DocHeading>

                <DemoCard :code="tableAlignExampleRaw">
                    <TableAlignExample/>
                </DemoCard>

                <DocHeading
                    id="min-max-width-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример minWidth и maxWidth
                </DocHeading>

                <DemoCard :code="tableMinMaxWidthExampleRaw">
                    <TableMinMaxWidthExample/>
                </DemoCard>

                <DocHeading
                    id="selected-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример строки с атрибутом selected
                </DocHeading>

                <DemoCard
                    :code="tableSelectedExampleRaw"
                    highlight-lines="{7}"
                >
                    <TableSelectedExample/>
                </DemoCard>

                <DocHeading
                    id="size-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример таблицы с изменённым размером
                </DocHeading>

                <DemoCard
                    :code="tableSizeExampleRaw"
                    highlight-lines="{2}"
                >
                    <TableSizeExample/>
                </DemoCard>

                <DocHeading
                    id="bigdata-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример таблицы с атрибутом bigdata
                </DocHeading>

                <DemoCard
                    :code="tableBigdataExampleRaw"
                    highlight-lines="{2}"
                >
                    <TableBigdataExample/>
                </DemoCard>

                <DocHeading
                    id="zebra-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример таблицы с атрибутом zebra
                </DocHeading>

                <DemoCard
                    :code="tableZebraExampleRaw"
                    highlight-lines="{2}"
                >
                    <TableZebraExample/>
                </DemoCard>

                <DocHeading
                    id="bordered-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример таблицы с атрибутом bordered
                </DocHeading>

                <DemoCard
                    :code="tableBorderedExampleRaw"
                    highlight-lines="{2}"
                >
                    <TableBorderedExample/>
                </DemoCard>

                <DocHeading
                    id="borderless-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример таблицы с атрибутом borderless
                </DocHeading>

                <DemoCard
                    :code="tableBorderlessExampleRaw"
                    highlight-lines="{2}"
                >
                    <TableBorderlessExample/>
                </DemoCard>

                <DocHeading
                    id="single-lined-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример таблицы с атрибутом singleLined
                </DocHeading>

                <DemoCard
                    :code="tableSingleLinedExampleRaw"
                    highlight-lines="{4}"
                >
                    <TableSingleLinedExample/>
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
    TableAlignExample,
    TableBigdataExample,
    TableBorderedExample,
    TableDemoExample,
    TableMinMaxWidthExample,
    TableSelectedExample,
    TableSingleLinedExample,
    TableSizeExample,
    TableZebraExample,
} from '@/examples/table'
import tableAlignExampleRaw from '@/examples/table/TableAlignExample.vue?raw'
import tableAnatomyExampleRaw from '@/examples/table/TableAnatomyExample.vue?raw'
import tableBigdataExampleRaw from '@/examples/table/TableBigdataExample.vue?raw'
import tableBorderedExampleRaw from '@/examples/table/TableBorderedExample.vue?raw'
import TableBorderlessExample from '@/examples/table/TableBorderlessExample.vue'
import tableBorderlessExampleRaw from '@/examples/table/TableBorderlessExample.vue?raw'
import tableDemoExampleRaw from '@/examples/table/TableDemoExample.vue?raw'
import tableMinMaxWidthExampleRaw from '@/examples/table/TableMinMaxWidthExample.vue?raw'
import tableSelectedExampleRaw from '@/examples/table/TableSelectedExample.vue?raw'
import tableSingleLinedExampleRaw from '@/examples/table/TableSingleLinedExample.vue?raw'
import tableSizeExampleRaw from '@/examples/table/TableSizeExample.vue?raw'
import tableZebraExampleRaw from '@/examples/table/TableZebraExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
