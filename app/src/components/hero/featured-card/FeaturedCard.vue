<style scoped>
.fc-icon {
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.1);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    padding: 0.5rem;
}

html[data-theme="dark"] .fc-icon {
    background: rgba(255, 255, 255, 0.2);
}

.fc-title {
    font-weight: bold;
}
</style>

<template>
    <Card>
        <CardDetails class="custom-p-24">
            <div class="fc-icon">
                <slot name="icon"/>
            </div>
            <p class="fc-title">
                <slot name="title"/>
            </p>
            <div>
                <slot name="default"/>
            </div>
        </CardDetails>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardDetails } from 'webasystvue'
</script>
