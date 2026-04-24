<template>
    <Heading>
        <span>
            Заголовок
        </span>
        <HeadingItem
            action
            count
        >
            <i class="fas fa-plus-circle"/>
        </HeadingItem>
        <HeadingItem count>
            <i class="fas fa-cog"/>
        </HeadingItem>
        <HeadingItem count>
            <i class="fas fa-exclamation-circle"/>
        </HeadingItem>
    </Heading>
</template>

<script setup lang="ts">
import { Heading, HeadingItem } from 'webasystvue'
</script>
