<template>
    <Sidebar
        class="blank"
        right
    >
        <Heading>На этой странице</Heading>
        <ContentDocMenu
            :items="items"
            :active-id="activeId"
        />
    </Sidebar>
</template>

<script setup lang="ts">
import type { ContentDocItem } from '@/composables'
import { Heading, Sidebar } from 'webasystvue'
import ContentDocMenu from './ContentDocMenu.vue'

defineProps<{
    items: ContentDocItem[]
    activeId?: string
}>()
</script>
