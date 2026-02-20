<template>
    <Story title="Box/Demo">
        <Variant title="default">
            <Box style="width: 300px; border: 1px dashed gold;">
                Box
            </Box>
        </Variant>
        <Variant title="contentbox">
            <Box
                contentbox
                style="width: 300px; border: 1px dashed gold;"
            >
                Content box
            </Box>
        </Variant>
        <Variant title="rounded">
            <Box
                rounded
                style="width: 300px; border: 1px dashed gold;"
            >
                Box rounded
            </Box>
        </Variant>
        <Variant title="uploadbox">
            <Box uploadbox>
                Uploadbox
            </Box>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Box } from '@/box'
</script>
