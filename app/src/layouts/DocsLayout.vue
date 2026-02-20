<template>
    <Flexbox>
        <DocsSidebar/>
        <PageLayout>
            <slot/>
        </PageLayout>
        <SidebarContentDoc
            :items="items"
            :active-id="activeId"
        />
    </Flexbox>
</template>

<script setup lang="ts">
import { Flexbox } from 'webasystvue'
import { SidebarContentDoc } from '@/components/docs/sidebar-content-doc'
import DocsSidebar from '@/components/docs/sidebar/DocsSidebar.vue'
import { useProvideContentDoc } from '@/composables'
import PageLayout from '@/layouts/PageLayout.vue'

const { items, activeId } = useProvideContentDoc()
</script>
