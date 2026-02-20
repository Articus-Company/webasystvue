<template>
    <Story title="Tablebox/Demo">
        <Variant title="default">
            <Tablebox style="border: 1px dashed gold">
                <div>Я обычная колонка</div>
                <div>Я колонка в центре и чуть побольше</div>
                <div>А я колонка справа</div>
            </Tablebox>
        </Variant>
        <Variant title="fixed">
            <Tablebox
                style="border: 1px dashed gold"
                fixed
            >
                <div>Я обычная колонка</div>
                <div>Я колонка в центре и чуть побольше</div>
                <div>А я колонка справа</div>
            </Tablebox>
        </Variant>
        <Variant title="spaced">
            <Tablebox
                style="border: 1px dashed gold"
                space="16"
            >
                <div>Я обычная колонка</div>
                <div>Я колонка в центре и чуть побольше</div>
                <div>А я колонка справа</div>
            </Tablebox>
        </Variant>
        <Variant title="fixed spaced">
            <Tablebox
                style="border: 1px dashed gold"
                space="32"
                fixed
            >
                <div>Я обычная колонка</div>
                <div>Я колонка в центре и чуть побольше</div>
                <div>А я колонка справа</div>
            </Tablebox>
        </Variant>
        <Variant title="middle">
            <Tablebox
                style="border: 1px dashed gold"
                fixed
                middle
            >
                <div>Я отцентрированный контент</div>
                <div>
                    <div style="background: rgba(0,0,0,.1);">
                        Я колонка в центре и чуть побольше. Я колонка в центре и чуть побольше. Я колонка в центре и чуть побольше
                    </div>
                </div>
                <div>А я колонка справа</div>
            </Tablebox>
        </Variant>
        <Variant title="middle item">
            <Tablebox
                style="border: 1px dashed gold"
                space="32"
                fixed
            >
                <TableboxMiddle>
                    Я отцентрированный контент
                </TableboxMiddle>
                <div>
                    <div style="background: rgba(0,0,0,.1)">
                        Я колонка в центре и чуть побольше. Я колонка в центре и чуть побольше. Я колонка в центре и чуть побольше
                    </div>
                </div>
                <div>А я колонка справа</div>
            </Tablebox>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Tablebox, TableboxMiddle } from '@/tablebox'
</script>
