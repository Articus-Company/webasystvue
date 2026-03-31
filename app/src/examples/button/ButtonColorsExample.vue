<template>
    <Button
        v-for="color in colors"
        :key="color"
        :color="color"
    >
        {{ color }}
    </Button>
</template>

<script setup lang="ts">
import { Button } from 'webasystvue'

const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'brown',
    'pink',
    'white',
    'black',
    'gray',
    'light-gray',
    'dark-gray',
    'danger',
    'warning',
    'success',
]
</script>
