<template>
    <Table borderless>
        <TableHeader>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Имя</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Роль</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow
                v-for="user in users"
                :key="user.id"
            >
                <TableCell>{{ user.id }}</TableCell>
                <TableCell>{{ user.name }}</TableCell>
                <TableCell>{{ user.email }}</TableCell>
                <TableCell>{{ user.role }}</TableCell>
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
        name: 'Алексей Иванов',
        email: 'a.ivanov@docs.com',
        role: 'Администратор',
    },
    {
        id: 2,
        name: 'Мария Петрова',
        email: 'm.petrova@docs.com',
        role: 'Менеджер',
    },
    {
        id: 3,
        name: 'Дмитрий Смирнов',
        email: 'd.smirnov@docs.com',
        role: 'Пользователь',
    },
    {
        id: 4,
        name: 'Елена Кузнецова',
        email: 'e.kuznetsova@docs.com',
        role: 'Редактор',
    },
    {
        id: 5,
        name: 'Сергей Фёдоров',
        email: 's.fedorov@docs.com',
        role: 'Пользователь',
    },
    {
        id: 6,
        name: 'Ольга Николаева',
        email: 'o.nikolaeva@docs.com',
        role: 'Менеджер',
    },
]
</script>
