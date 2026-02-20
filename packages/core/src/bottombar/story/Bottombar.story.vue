<template>
    <Story title="Bottombar/Demo">
        <Variant title="default">
            <Bottombar>
                <BottombarList>
                    <BottombarListItem>
                        <a href="#">
                            📋
                            <span>Lists</span>
                        </a>
                    </BottombarListItem>
                    <BottombarListItem selected>
                        <a href="#">
                            ✅
                            <span>Todos</span>
                        </a>
                    </BottombarListItem>
                    <BottombarListItem>
                        <a href="#">
                            💖
                            <span>Family</span>
                        </a>
                    </BottombarListItem>
                    <BottombarListItem>
                        <a href="#">
                            ⚙️
                            <span>Settings</span>
                        </a>
                    </BottombarListItem>
                </BottombarList>
            </Bottombar>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Bottombar, BottombarList, BottombarListItem } from '@/bottombar'
</script>
