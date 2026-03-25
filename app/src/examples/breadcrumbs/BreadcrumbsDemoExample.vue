<template>
    <Breadcrumbs>
        <BreadcrumbsSection>
            <BreadcrumbsItem>
                Корневой раздел
            </BreadcrumbsItem>
        </BreadcrumbsSection>
        <BreadcrumbsSection>
            <BreadcrumbsItem>
                Каталог
            </BreadcrumbsItem>
        </BreadcrumbsSection>
        <BreadcrumbsSection>
            <BreadcrumbsItem>
                Директория
            </BreadcrumbsItem>
        </BreadcrumbsSection>
        <BreadcrumbsSection active>
            <BreadcrumbsItem>
                Активный раздел
            </BreadcrumbsItem>
        </BreadcrumbsSection>
    </Breadcrumbs>
</template>

<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsSection } from 'webasystvue'
</script>
