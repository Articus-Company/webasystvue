<template>
    <Badge>Badge</Badge>
    <Badge color="green">
        Green
    </Badge>
    <Badge color="blue">
        Blue
    </Badge>
    <Badge squared>
        Squared
    </Badge>
    <Badge user>
        User
    </Badge>
    <Badge
        size="smallest"
        color="pink"
    >
        Smallest pink
    </Badge>
    <Badge
        size="large"
        squared
    >
        Large squared
    </Badge>
    <Badge
        size="small"
        color="blue"
        user
    >
        Small user blue
    </Badge>
</template>

<script setup lang="ts">
import { Badge } from 'webasystvue'
</script>
