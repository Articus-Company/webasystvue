<template>
    <Story title="Breadcrumbs/Demo">
        <Variant title="default">
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
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsSection } from '@/breadcrumbs'
</script>
