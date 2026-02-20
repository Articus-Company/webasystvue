<template>
    <Story title="Content/Demo">
        <Variant title="default">
            <div class="flexbox">
                <div class="sidebar">
                    Sidebar
                </div>
                <Content style="background: gold">
                    <h1>Content</h1>
                </Content>
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Content } from '@/content'
</script>
