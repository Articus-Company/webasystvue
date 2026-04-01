<template>
    <Card style="width: 300px;">
        <CardDetails>
            <Heading as="h5">
                <HeadingItem>
                    <i class="fas fa-star"/>
                    <i class="fas fa-star"/>
                    <i class="fas fa-star"/>
                    <i class="fas fa-star"/>
                    <i class="fas fa-star-half-alt"/>
                    4.8
                </HeadingItem>
                <HeadingItem count>
                    123 отзыва
                </HeadingItem>
            </Heading>
        </CardDetails>
        <CardImage>
            <img
                src="https://img.freepik.com/free-photo/modern-gray-ear-headphones-white-background_9975-133601.jpg"
                alt="headphones"
            >
        </CardImage>
        <CardDetails>
            <Flexbox as="h3">
                Наушники
                <span class="custom-ml-auto">
                    4 990 ₽
                </span>
            </Flexbox>

            <p class="small">
                Шумоподавление, 30 ч работы, быстрая зарядка. Доставка за 1 день.
            </p>

            <Button full-width>
                В корзину
            </Button>
        </CardDetails>
    </Card>
</template>

<script setup lang="ts">
import {
    Button,
    Card,
    CardDetails,
    CardImage,
    Flexbox,
    Heading,
    HeadingItem,
} from 'webasystvue'
</script>
