<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="button"
                    tag="h1"
                >
                    Button
                </DocHeading>

                <DemoCard :code="buttonDemoExampleRaw">
                    <ButtonDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="button"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="buttonAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="button"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-button"
                    tag="h3"
                    parent="api"
                >
                    &lt;Button&gt;
                </DocHeading>

                <ApiPropsTable
                    :rows="[
                        { prop: 'as', default: `'button'` },
                        { prop: 'asChild' },
                        { prop: 'color', type: 'red | green | blue | yellow | orange | purple | brown | pink | white | black | gray | light-gray | dark-gray | danger | warning | success' },
                        { prop: 'size', type: 'smallest | smaller | small | large | larger | largest' },
                        { prop: 'outlined', type: 'boolean' },
                        { prop: 'rounded', type: 'boolean' },
                        { prop: 'nobutton', type: 'boolean' },
                        { prop: 'fullWidth', type: 'boolean' },
                        { prop: 'gradient', type: 'boolean' },
                        { prop: 'circle', type: 'boolean' },
                        { prop: 'disabled', type: 'boolean' },
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
                    parent="button"
                >
                    Примеры
                </DocHeading>

                <DocHeading
                    id="colors-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример цветных кнопок
                </DocHeading>

                <DemoCard
                    :code="buttonColorsExampleRaw"
                    highlight-lines="{5}"
                >
                    <div style="width: 500px">
                        <ButtonColorsExample/>
                    </div>
                </DemoCard>

                <DocHeading
                    id="gradient-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример градиентных кнопок
                </DocHeading>

                <DemoCard
                    :code="buttonGradientExampleRaw"
                    highlight-lines="{6}"
                >
                    <div style="width: 500px">
                        <ButtonGradientExample/>
                    </div>
                </DemoCard>

                <DocHeading
                    id="sizes-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример кнопок с разным размером
                </DocHeading>

                <DemoCard
                    :code="buttonSizesExampleRaw"
                    highlight-lines="{5}"
                >
                    <ButtonSizesExample/>
                </DemoCard>

                <DocHeading
                    id="outlined-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример outlined кнопки
                </DocHeading>

                <DemoCard
                    :code="buttonOutlinedExampleRaw"
                    highlight-lines="{2}"
                >
                    <ButtonOutlinedExample/>
                </DemoCard>

                <DocHeading
                    id="nobutton-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример nobutton кнопки
                </DocHeading>

                <DemoCard
                    :code="buttonNoButtonExampleRaw"
                    highlight-lines="{2}"
                >
                    <ButtonNoButtonExample/>
                </DemoCard>

                <DocHeading
                    id="full-width-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример fullWidth кнопки
                </DocHeading>

                <DemoCard
                    :code="buttonFullWidthExampleRaw"
                    highlight-lines="{3}"
                >
                    <ButtonFullWidthExample/>
                </DemoCard>

                <DocHeading
                    id="circle-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример circle кнопки
                </DocHeading>

                <DemoCard
                    :code="buttonCircleExampleRaw"
                    highlight-lines="{2}"
                >
                    <ButtonCircleExample/>
                </DemoCard>

                <DocHeading
                    id="disabled-example"
                    tag="h3"
                    parent="examples"
                >
                    Пример disabled кнопки
                </DocHeading>

                <Tip>
                    Если кнопка имеет атрибут <strong>disabled</strong>, событие <strong>click</strong> не будет срабатывать.
                    <a
                        href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/button#disabled"
                        target="_blank"
                    >
                        Подробнее <i class="fas fa-external-link-alt"/>
                    </a>
                </Tip>

                <DemoCard
                    :code="buttonDisabledExampleRaw"
                    highlight-lines="{2}"
                >
                    <ButtonDisabledExample/>
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
    ButtonCircleExample,
    ButtonColorsExample,
    ButtonDemoExample,
    ButtonDisabledExample,
    ButtonFullWidthExample,
    ButtonGradientExample,
    ButtonNoButtonExample,
    ButtonOutlinedExample,
    ButtonSizesExample,
} from '@/examples/button'
import buttonAnatomyExampleRaw from '@/examples/button/ButtonAnatomyExample.vue?raw'
import buttonCircleExampleRaw from '@/examples/button/ButtonCircleExample.vue?raw'
import buttonColorsExampleRaw from '@/examples/button/ButtonColorsExample.vue?raw'
import buttonDemoExampleRaw from '@/examples/button/ButtonDemoExample.vue?raw'
import buttonDisabledExampleRaw from '@/examples/button/ButtonDisabledExample.vue?raw'
import buttonFullWidthExampleRaw from '@/examples/button/ButtonFullWidthExample.vue?raw'
import buttonGradientExampleRaw from '@/examples/button/ButtonGradientExample.vue?raw'
import buttonNoButtonExampleRaw from '@/examples/button/ButtonNoButtonExample.vue?raw'
import buttonOutlinedExampleRaw from '@/examples/button/ButtonOutlinedExample.vue?raw'
import buttonSizesExampleRaw from '@/examples/button/ButtonSizesExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
