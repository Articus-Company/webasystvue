<template>
    <Skeleton>
        <SkeletonHeader/>
        <SkeletonCustomCircle size="96"/>
        <SkeletonLine style="width: 250px"/>
        <SkeletonLine style="width: 200px"/>
        <SkeletonCustomBox style="height: 100px"/>
        <SkeletonList/>
        <SkeletonList/>
        <SkeletonList/>
        <SkeletonList/>
    </Skeleton>
</template>

<script setup lang="ts">
import {
    Skeleton,
    SkeletonCustomBox,
    SkeletonCustomCircle,
    SkeletonHeader,
    SkeletonLine,
    SkeletonList,
} from 'webasystvue'
</script>
