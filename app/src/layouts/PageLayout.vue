<template>
    <Content
        class="blank"
        style="min-height: calc(100vh - 4rem)"
    >
        <slot/>
    </Content>
</template>

<script setup lang="ts">
import { Content } from 'webasystvue'
</script>
