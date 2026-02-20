<style scoped>
.code-alt {
    border: 1px solid hsl(240 5.9% 90%);
    background: none;
    border-radius: .375rem;
    padding: .25rem .5rem;
    font-weight: bold;
    font-size: .875em;
}
html[data-theme="dark"] .code-alt {
    border: 1px solid hsl(240 3.7% 15.9%);
}
</style>

<template>
    <code class="code-alt">
        <slot/>
    </code>
</template>

<script setup lang="ts">
</script>
