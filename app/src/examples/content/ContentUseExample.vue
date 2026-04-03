<template>
    <Flexbox>
        <Sidebar/>
        <Content>
            <RouterView/>
        </Content>
    </Flexbox>
</template>

<script setup lang="ts">
import { Content, Flexbox, Sidebar } from 'webasystvue'
</script>
