<template>
    <TabsSection v-bind="props">
        <TabsItem>
            <slot/>
        </TabsItem>
    </TabsSection>
</template>

<script setup lang="ts">
import type { TabsSectionProps } from 'webasystvue'
import { TabsItem, TabsSection } from 'webasystvue'

const props = defineProps<TabsSectionProps>()
</script>
