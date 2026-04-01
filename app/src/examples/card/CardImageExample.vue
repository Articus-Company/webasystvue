<template>
    <Card style="width: 300px;">
        <CardImage>
            <img
                src="https://img.freepik.com/free-photo/single-ripe-delicious-yellow-banana-isolated-studio-background-bright-color-prevails-tropical-fruit-your-tasty-snack-appetizing-edible-product-empty-space-text-information_273609-38032.jpg"
                alt="banana"
            >
        </CardImage>
        <CardDetails>
            <h1>Card Title</h1>
            <p>Card desc</p>
        </CardDetails>
    </Card>
</template>

<script setup lang="ts">
import {
    Card,
    CardDetails,
    CardImage,
} from 'webasystvue'
</script>
