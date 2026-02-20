<template>
    <Story title="Paging/Demo">
        <Variant title="default">
            <Paging>
                <PagingItem>
                    <a href="javascript:void(0);">←</a>
                </PagingItem>
                <PagingItem>
                    <a href="javascript:void(0);">1</a>
                </PagingItem>
                <PagingItem>
                    <a href="javascript:void(0);">2</a>
                </PagingItem>
                <PagingItem>
                    <a href="javascript:void(0);">3</a>
                </PagingItem>
                <PagingItem selected>
                    <a href="javascript:void(0);">4</a>
                </PagingItem>
                <PagingItem>
                    <a href="javascript:void(0);">5</a>
                </PagingItem>
                <PagingItem>
                    <span>...</span>
                </PagingItem>
                <PagingItem>
                    <a href="javascript:void(0);">21</a>
                </PagingItem>
                <PagingItem>
                    <a href="javascript:void(0);">→</a>
                </PagingItem>
            </Paging>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Paging, PagingItem } from '@/paging'
</script>
