<template>
    <Tablebox
        style="border: 1px dashed gold; width: 700px"
        fixed
    >
        <TableboxMiddle>
            Я обычная колонка
        </TableboxMiddle>
        <div>Я колонка в центре и чуть побольше</div>
        <div>А я колонка справа</div>
    </Tablebox>
</template>

<script setup lang="ts">
import { Tablebox, TableboxMiddle } from 'webasystvue'
</script>
