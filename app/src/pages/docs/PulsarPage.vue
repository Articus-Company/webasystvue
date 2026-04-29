<template>
    <DocsLayout>
        <Article>
            <ArticleBody>
                <DocHeading
                    id="pulsar"
                    tag="h1"
                >
                    Pulsar
                </DocHeading>

                <DemoCard :code="pulsarDemoExampleRaw">
                    <PulsarDemoExample/>
                </DemoCard>

                <DocHeading
                    id="anatomy"
                    tag="h2"
                    parent="pulsar"
                >
                    Анатомия
                </DocHeading>

                <CodeVueHighlighter :code="pulsarAnatomyExampleRaw"/>

                <DocHeading
                    id="api"
                    tag="h2"
                    parent="pulsar"
                >
                    Описание API
                </DocHeading>

                <DocHeading
                    id="el-pulsar"
                    tag="h3"
                    parent="api"
                >
                    &lt;Pulsar&gt;
                </DocHeading>

                <p>
                    Компонент является прозрачной обёрткой и не имеет собственного DOM-элемента. Все
                    остальные пропсы (id, style, aria-*, обработчики событий и т.д.) передаются
                    непосредственно дочернему элементу.
                </p>
            </ArticleBody>
        </Article>
    </DocsLayout>
</template>

<script setup lang="ts">
import { Article, ArticleBody } from 'webasystvue'
import { CodeVueHighlighter } from '@/components/code-highlighter'
import { DemoCard } from '@/components/docs/demo-card'
import { DocHeading } from '@/components/docs/doc-heading'
import { PulsarDemoExample } from '@/examples/pulsar'
import pulsarAnatomyExampleRaw from '@/examples/pulsar/PulsarAnatomyExample.vue?raw'
import pulsarDemoExampleRaw from '@/examples/pulsar/PulsarDemoExample.vue?raw'
import { DocsLayout } from '@/layouts'
</script>
