<template>
    <Story title="Inlinebox/Demo">
        <Variant title="default">
            <Inlinebox>
                <div>Элемент 1</div>
                <div>
                    <a href="javascript:void(0);">Элемент 2</a>
                </div>
                <div>Элемент 3</div>
                <div>
                    <a href="javascript:void(0);">Элемент 4</a>
                </div>
            </Inlinebox>
        </Variant>
        <Variant title="space">
            <Inlinebox space="32">
                <div>Элемент 1</div>
                <div>
                    <a href="javascript:void(0);">Элемент 2</a>
                </div>
                <div>Элемент 3</div>
                <div>
                    <a href="javascript:void(0);">Элемент 4</a>
                </div>
            </Inlinebox>
        </Variant>
        <Variant title="ul">
            <Inlinebox as="ul">
                <li>Элемент 1</li>
                <li>
                    <a href="javascript:void(0);">Элемент 2</a>
                </li>
                <li>Элемент 3</li>
                <li>
                    <a href="javascript:void(0);">Элемент 4</a>
                </li>
            </Inlinebox>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Inlinebox } from '@/inlinebox'
</script>
