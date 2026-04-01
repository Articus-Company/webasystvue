<template>
    <Card style="width: 300px;">
        <CardDetails>
            <h3>Top content</h3>
        </CardDetails>
        <CardImage>
            <img
                src="https://img.freepik.com/free-photo/long-french-baguette-with-crispy-golden-crust-isolated-beige-studio-background-freshly-baked-type-bread-tasty-nutrition-overhead-shot-tasty-gourmet-product-baked-bakery-food-concept_273609-37921.jpg"
                alt="baguette"
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
