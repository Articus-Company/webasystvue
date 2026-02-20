<template>
    <Alert
        type="success"
        style="width: 300px"
    >
        <i class="fas fa-check-circle"/> Это success алерт
        <AlertClose as="a">
            <i class="fas fa-times"/>
        </AlertClose>
    </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertClose } from 'webasystvue'
</script>
