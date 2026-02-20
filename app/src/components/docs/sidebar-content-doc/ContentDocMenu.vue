<template>
    <Menu>
        <MenuSection
            v-for="item in items"
            :key="item.id"
            :selected="activeId === item.id"
            rounded
        >
            <MenuItem
                as="a"
                :href="`#${item.id}`"
            >
                <span>{{ item.text }}</span>
            </MenuItem>

            <ContentDocMenu
                v-if="item.children?.length"
                :items="item.children"
                :active-id="activeId"
            />
        </MenuSection>
    </Menu>
</template>

<script setup lang="ts">
import type { ContentDocItem } from '@/composables'
import { Menu, MenuItem, MenuSection } from 'webasystvue'

defineProps<{
    items: ContentDocItem[]
    activeId?: string
}>()
</script>
