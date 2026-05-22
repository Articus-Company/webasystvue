<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="fields"
                    tag="h1"
                >
                    Fields
                </DocHeading>

                <DemoCard :code="fieldsDemoExampleRaw">
                    <FieldsDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="fields"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="fieldsAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="fields"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-fields"
                    tag="h3"
                    parent="api"
                >
                    &lt;Fields&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'vertical', type: 'boolean' },
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
                    id="el-fields-group"
                    tag="h3"
                    parent="api"
                >
                    &lt;FieldsGroup&gt;
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
                    id="el-field"
                    tag="h3"
                    parent="api"
                >
                    &lt;Field&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'vertical', type: 'boolean' },
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
                    id="el-field-name"
                    tag="h3"
                    parent="api"
                >
                    &lt;FieldName&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'forInput', type: 'boolean' },
                        { prop: 'forButton', type: 'boolean' },
                        { prop: 'forCheckbox', type: 'boolean' },
                        { prop: 'forSwitch', type: 'boolean' },
                        { prop: 'middle', type: 'boolean' },
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
                    id="el-field-value"
                    tag="h3"
                    parent="api"
                >
                    &lt;FieldValue&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as' },
                        { prop: 'asChild' },
                        { prop: 'middle', type: 'boolean' },
                        { prop: 'submit', type: 'boolean' },
                    ]"
                >
                    <template #type-0>
                        <ApiPropsAsDesc/>
                    </template>
                    <template #type-1>
                        <ApiPropsAsChildDesc/>
                    </template>
                </ApiPropsTable>
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
import { FieldsDemoExample } from '@/examples/fields'
import fieldsAnatomyExampleRaw from '@/examples/fields/FieldsAnatomyExample.vue?raw'
import fieldsDemoExampleRaw from '@/examples/fields/FieldsDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
