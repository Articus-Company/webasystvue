<template>
    <Paging>
        <PagingItem>
            <span>←</span>
        </PagingItem>
        <PagingItem>
            <span>1</span>
        </PagingItem>
        <PagingItem>
            <span>2</span>
        </PagingItem>
        <PagingItem>
            <span>3</span>
        </PagingItem>
        <PagingItem selected>
            <span>4</span>
        </PagingItem>
        <PagingItem>
            <span>5</span>
        </PagingItem>
        <PagingItem>
            <span>...</span>
        </PagingItem>
        <PagingItem>
            <span>21</span>
        </PagingItem>
        <PagingItem>
            <span>→</span>
        </PagingItem>
    </Paging>
</template>

<script setup lang="ts">
import { Paging, PagingItem } from 'webasystvue'
</script>
