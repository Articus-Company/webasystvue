<template>
    <Table style="width: 500px">
        <TableHeader>
            <TableRow>
                <TableHead min-width/>
                <TableHead min-width>
                    #
                </TableHead>
                <TableHead max-width>
                    имя
                </TableHead>
                <TableHead>
                    почта
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow
                v-for="user in users"
                :key="user.id"
            >
                <TableCell min-width>
                    <input type="checkbox">
                </TableCell>
                <TableCell min-width>
                    {{ user.id }}
                </TableCell>
                <TableCell max-width>
                    {{ user.name }}
                </TableCell>
                <TableCell>
                    {{ user.email }}
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
    TableHead,
    TableHeader,
    TableRow,
} from 'webasystvue'

const users = [
    {
        id: 1,
        email: 'demo@docs.ru',
        name: 'Иван',
    },
    {
        id: 2,
        email: 'qwerty@docs.ru',
        name: 'Петя',
    },
    {
        id: 3,
        email: 'table@docs.ru',
        name: 'Альберт',
    },
    {
        id: 4,
        email: 'super@docs.ru',
        name: 'Никита',
    },
    {
        id: 5,
        email: 'vue@docs.ru',
        name: 'Сергей',
    },
]
</script>
