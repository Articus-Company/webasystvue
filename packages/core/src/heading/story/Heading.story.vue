<template>
    <Story title="Heading/Demo">
        <Variant title="default">
            <Heading>
                <HeadingItem>
                    Heading
                </HeadingItem>
            </Heading>
        </Variant>
        <Variant title="black">
            <Heading black>
                <HeadingItem>
                    Heading black
                </HeadingItem>
            </Heading>
        </Variant>
        <Variant title="count">
            <Heading>
                <HeadingItem>
                    Heading
                </HeadingItem>
                <HeadingItem count>
                    3
                </HeadingItem>
            </Heading>
        </Variant>
        <Variant title="action">
            <Heading>
                <HeadingItem>
                    Heading
                </HeadingItem>
                <HeadingItem action>
                    ➕
                </HeadingItem>
            </Heading>
        </Variant>
        <Variant title="caret">
            <Heading>
                <HeadingItem>
                    <HeadingCaret>▼</HeadingCaret>
                    Заголовок меню с длинным-предлинным текстом, который на одну строку не влезет
                    хоть ты тресни
                </HeadingItem>
                <HeadingItem
                    action
                    count
                >
                    ⚙️
                </HeadingItem>
                <HeadingItem
                    action
                    count
                >
                    ➕
                </HeadingItem>
            </Heading>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Heading, HeadingCaret, HeadingItem } from '@/heading'
</script>
