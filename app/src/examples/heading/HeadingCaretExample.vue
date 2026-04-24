<template>
    <Heading>
        <HeadingItem>
            <HeadingCaretWrapper>
                <HeadingCaret>
                    <i class="fas fa-caret-down"/>
                </HeadingCaret>
            </HeadingCaretWrapper>
            Заголовок
        </HeadingItem>
        <HeadingItem
            action
            count
        >
            <i class="fas fa-plus-circle"/>
        </HeadingItem>
    </Heading>
</template>

<script setup lang="ts">
import { Heading, HeadingCaret, HeadingCaretWrapper, HeadingItem } from 'webasystvue'
</script>
