<template>
    <Story title="Bricks/Demo">
        <Variant title="default">
            <Bricks>
                <BricksItem>
                    <BricksItemIcon>🤔</BricksItemIcon>
                    <BricksItemCount>count</BricksItemCount>
                    Hmm...
                </BricksItem>
                <BricksItem>
                    <BricksItemIcon>🏅</BricksItemIcon>
                    <BricksItemCount>+1</BricksItemCount>
                    Yes
                </BricksItem>
                <BricksItem selected>
                    <BricksItemIcon>💰</BricksItemIcon>
                    <BricksItemCount>666</BricksItemCount>
                    Selected
                </BricksItem>
                <BricksItem accented>
                    <BricksItemIcon>🌍</BricksItemIcon>
                    <BricksItemCount>777</BricksItemCount>
                    Accented
                </BricksItem>
                <BricksItem full-width>
                    <BricksItemIcon>🫣</BricksItemIcon>
                    <BricksItemCount>123</BricksItemCount>
                    Full Width
                </BricksItem>
            </Bricks>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Bricks, BricksItem, BricksItemCount, BricksItemIcon } from '@/bricks'
</script>
