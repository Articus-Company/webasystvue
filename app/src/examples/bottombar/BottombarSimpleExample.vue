<template>
    <Bottombar>
        <BottombarList>
            <BottombarListItem>
                <a href="#">
                    <i class="fas fa-list"/>
                    <span>Lists</span>
                </a>
            </BottombarListItem>
            <BottombarListItem selected>
                <a href="#">
                    <i class="fas fa-check"/>
                    <span>To-Dos</span>
                </a>
            </BottombarListItem>
            <BottombarListItem>
                <a href="#">
                    <i class="fas fa-heart"/>
                    <span>Family</span>
                </a>
            </BottombarListItem>
            <BottombarListItem>
                <a href="#">
                    <i class="fas fa-cog"/>
                    <span>Settings</span>
                    <Badge>1</Badge>
                </a>
            </BottombarListItem>
        </BottombarList>
    </Bottombar>
</template>

<script setup lang="ts">
import { Badge, Bottombar, BottombarList, BottombarListItem } from 'webasystvue'
</script>
