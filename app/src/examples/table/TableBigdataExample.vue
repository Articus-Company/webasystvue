<template>
    <Table bigdata>
        <TableHeader>
            <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead align="right">
                    Доход, ₽
                </TableHead>
                <TableHead align="right">
                    Расход, ₽
                </TableHead>
                <TableHead align="right">
                    Баланс, ₽
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow
                v-for="row in transactions"
                :key="row.id"
            >
                <TableCell>{{ row.date }}</TableCell>
                <TableCell>{{ row.description }}</TableCell>
                <TableCell>{{ row.category }}</TableCell>
                <TableCell align="right">
                    {{ row.income?.toLocaleString() ?? '-' }}
                </TableCell>
                <TableCell align="right">
                    {{ row.expense?.toLocaleString() ?? '-' }}
                </TableCell>
                <TableCell align="right">
                    {{ row.balance.toLocaleString() }}
                </TableCell>
            </TableRow>
        </TableBody>
        <TableFooter>
            <TableRow class="bold">
                <TableCell colspan="3">
                    Итого
                </TableCell>
                <TableCell align="right">
                    430 000
                </TableCell>
                <TableCell align="right">
                    323 000
                </TableCell>
                <TableCell align="right">
                    1 307 000
                </TableCell>
            </TableRow>
        </TableFooter>
    </Table>
</template>

<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from 'webasystvue'

const transactions = [
    {
        id: 1,
        date: '01.04.2026',
        description: 'Оплата по счёту №123',
        category: 'Услуги',
        income: 150000,
        expense: null,
        balance: 1350000,
    },
    {
        id: 2,
        date: '03.04.2026',
        description: 'Аренда офиса',
        category: 'Аренда',
        income: null,
        expense: 45000,
        balance: 1305000,
    },
    {
        id: 3,
        date: '05.04.2026',
        description: 'Покупка оборудования',
        category: 'Оборудование',
        income: null,
        expense: 89000,
        balance: 1216000,
    },
    {
        id: 4,
        date: '07.04.2026',
        description: 'Продажа товаров',
        category: 'Продажи',
        income: 230000,
        expense: null,
        balance: 1446000,
    },
    {
        id: 5,
        date: '10.04.2026',
        description: 'Налоги',
        category: 'Налоги',
        income: null,
        expense: 32000,
        balance: 1414000,
    },
    {
        id: 6,
        date: '12.04.2026',
        description: 'Зарплата сотрудников',
        category: 'Зарплата',
        income: null,
        expense: 120000,
        balance: 1294000,
    },
    {
        id: 7,
        date: '14.04.2026',
        description: 'Продажа услуг',
        category: 'Продажи',
        income: 45000,
        expense: null,
        balance: 1339000,
    },
    {
        id: 8,
        date: '16.04.2026',
        description: 'Реклама',
        category: 'Маркетинг',
        income: null,
        expense: 15000,
        balance: 1324000,
    },
    {
        id: 9,
        date: '18.04.2026',
        description: 'Возврат от поставщика',
        category: 'Корректировка',
        income: 5000,
        expense: null,
        balance: 1329000,
    },
    {
        id: 10,
        date: '20.04.2026',
        description: 'Обслуживание серверов',
        category: 'ИТ',
        income: null,
        expense: 22000,
        balance: 1307000,
    },
]
</script>
