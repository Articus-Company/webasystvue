<style scoped>
.demo-card {
    background-color: hsl(var(--webasystvue-card-background));
    border-radius: .75rem;
}

.demo-card .tabs{
    width: 100%;
}

.demo-card .tabs li:first-child{
    margin-left: 2rem;
}

.demo-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}

.demo-card-item {
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>

<template>
    <div class="demo-card">
        <Tabs
            v-if="code"
            bordered-bottom
        >
            <TabsSection :selected="tab === 'demo'">
                <TabsItem @click="tab = 'demo'">
                    Демо
                </TabsItem>
            </TabsSection>
            <TabsSection :selected="tab === 'code'">
                <TabsItem @click="tab = 'code'">
                    Код
                </TabsItem>
            </TabsSection>
        </Tabs>
        <div
            v-show="tab === 'demo'"
            class="demo-card-container"
        >
            <div class="demo-card-item">
                <slot/>
            </div>
        </div>
        <CodeVueHighlighter
            v-if="code"
            v-show="code && tab === 'code'"
            :code="code"
            :highlight-lines="highlightLines"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, TabsItem, TabsSection } from 'webasystvue'
import { CodeVueHighlighter } from '@/components/code-highlighter'

defineProps<{
    code?: string
    highlightLines?: string
}>()

const tab = ref<'code' | 'demo'>('demo')
</script>
