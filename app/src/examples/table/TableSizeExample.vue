<template>
    <Table size="smallest">
        <TableCaption style="caption-side: bottom; margin-top: 1rem">
            Список заказов за апрель 2026
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead align="right">
                    Сумма, ₽
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow
                v-for="order in orders"
                :key="order.id"
            >
                <TableCell>
                    {{ order.id }}
                </TableCell>
                <TableCell>
                    {{ order.date }}
                </TableCell>
                <TableCell>
                    <a>
                        {{ order.customer }}
                    </a>
                </TableCell>
                <TableCell>
                    <Badge
                        :color="statusColor(order.status)"
                        size="small"
                        squared
                    >
                        {{ order.status }}
                    </Badge>
                </TableCell>
                <TableCell align="right">
                    {{ order.amount }}
                </TableCell>
            </TableRow>
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colspan="4">
                    Итого
                </TableCell>
                <TableCell align="right">
                    490 100
                </TableCell>
            </TableRow>
        </TableFooter>
    </Table>
</template>

<script setup lang="ts">
import {
    Badge,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from 'webasystvue'

const orders = [
    {
        id: 1001,
        date: '2026-04-25',
        customer: 'ООО "Компания"',
        status: 'Новый',
        amount: '145 000',
    },
    {
        id: 1002,
        date: '2026-04-26',
        customer: 'ИП Иванов А.А.',
        status: 'В обработке',
        amount: '24 500',
    },
    {
        id: 1003,
        date: '2026-04-27',
        customer: 'Петрова Е.С.',
        status: 'Отправлен',
        amount: '8 600',
    },
    {
        id: 1004,
        date: '2026-04-28',
        customer: 'АО "Корпорация"',
        status: 'Доставлен',
        amount: '312 000',
    },
    {
        id: 1005,
        date: '2026-04-29',
        customer: 'Сидоров В.Г.',
        status: 'Отменён',
        amount: '0',
    },
]

function statusColor(status: string) {
    switch (status) {
        case 'Новый':
            return 'red'
        case 'В обработке':
            return 'orange'
        case 'Отправлен':
            return 'blue'
        case 'Доставлен':
            return 'green'
        case 'Отменён':
            return 'gray'
        default:
            return undefined
    }
}
</script>
