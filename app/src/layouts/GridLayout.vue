<style scoped>
.grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
}
</style>

<template>
    <div class="grid-layout">
        <slot/>
    </div>
</template>

<script setup lang="ts">
</script>
