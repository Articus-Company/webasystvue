<template>
    <Alert style="width: 300px">
        Alert with close
        <AlertClose
            as="a"
            href="#"
        >
            <i class="fas fa-times"/>
        </AlertClose>
    </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertClose } from 'webasystvue'
</script>
