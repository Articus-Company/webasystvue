<template>
    <Userpic size="48">
        <img
            src="/wa-content/img/userpic.svg"
            alt=""
        >
        <UserpicStatus/>
    </Userpic>
    &nbsp;
    <Userpic
        size="48"
        outlined
    >
        <img
            src="/wa-content/img/userpic.svg"
            alt=""
        >
        <UserpicStatus/>
    </Userpic>
    &nbsp;
    <Userpic
        size="48"
        outlined
    >
        <img
            src="/wa-content/img/userpic.svg"
            alt=""
        >
        <UserpicStatus>
            <i class="fas fa-umbrella-beach"/>
        </UserpicStatus>
    </Userpic>
</template>

<script setup lang="ts">
import { Userpic, UserpicStatus } from 'webasystvue'
</script>
