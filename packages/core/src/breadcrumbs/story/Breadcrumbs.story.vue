<template>
    <Story title="Breadcrumbs/Demo">
        <Variant title="default">
            <Breadcrumbs>
                <BreadcrumbsItem>
                    <a href="">Корневой раздел</a>
                </BreadcrumbsItem>
                <BreadcrumbsItem>
                    <a href="">Каталог</a>
                </BreadcrumbsItem>
                <BreadcrumbsItem>
                    <a href="">Директория</a>
                </BreadcrumbsItem>
                <BreadcrumbsItem active>
                    <a href="">Активный раздел</a>
                </BreadcrumbsItem>
            </Breadcrumbs>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsItem } from '@/breadcrumbs'
</script>
