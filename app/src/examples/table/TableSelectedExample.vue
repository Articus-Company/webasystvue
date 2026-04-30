<template>
    <Table style="width: 500px">
        <TableBody>
            <TableRow
                v-for="i in 4"
                :key="i"
                :selected="i === 2"
            >
                <TableCell>
                    <input
                        type="checkbox"
                        :checked="i === 2"
                    >
                </TableCell>
                <TableCell>
                    {{ i }}
                </TableCell>
                <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>

<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from 'webasystvue'
</script>
