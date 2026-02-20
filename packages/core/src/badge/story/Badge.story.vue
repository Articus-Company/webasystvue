<template>
    <Story
        title="Badge/Demo"
        :layout="{
            type: 'grid',
            width: 200,
        }"
    >
        <Variant title="default">
            <Badge>Статус</Badge>
        </Variant>
        <Variant title="squared">
            <Badge squared>
                Статус
            </Badge>
        </Variant>
        <Variant title="user">
            <Badge user>
                Статус
            </Badge>
        </Variant>
        <Variant title="colored">
            <Badge color="green">
                Статус
            </Badge>
        </Variant>
        <Variant title="large">
            <Badge size="largest">
                Статус
            </Badge>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Badge } from '@/badge'
</script>
