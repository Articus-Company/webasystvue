<template>
    <Button
        v-for="size in sizes"
        :key="size"
        :size="size"
    >
        {{ size }}
    </Button>
</template>

<script setup lang="ts">
import { Button } from 'webasystvue'

const sizes = [
    'smallest',
    'smaller',
    'small',
    'large',
    'larger',
    'largest',
] as const
</script>
