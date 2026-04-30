<template>
    <Table
        style="width: 500px"
        single-lined
        zebra
    >
        <TableHeader>
            <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Автор</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow
                v-for="book in books"
                :key="book.id"
            >
                <TableCell>
                    <div>
                        {{ book.title }}
                        <i class="shortener"/>
                    </div>
                </TableCell>
                <TableCell>
                    <div>
                        {{ book.description }}
                        <i class="shortener"/>
                    </div>
                </TableCell>
                <TableCell>
                    <div>
                        {{ book.author }}
                        <i class="shortener"/>
                    </div>
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

const books = [
    {
        id: 1,
        title: 'Война и мир',
        author: 'Лев Толстой',
        description: 'Масштабный роман-эпопея, описывающий русское общество в эпоху войн против Наполеона. Охватывает судьбы нескольких дворянских семей на фоне исторических событий.',
    },
    {
        id: 2,
        title: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        description: 'Психологический роман о студенте Родионе Раскольникове, который решается на убийство старухи-процентщицы и переживает глубокие нравственные терзания.',
    },
    {
        id: 3,
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        description: 'Сатирический роман, сочетающий историю визита дьявола в Москву 1930-х годов и трагическую любовь Мастера и Маргариты.',
    },
    {
        id: 4,
        title: 'Тихий Дон',
        author: 'Михаил Шолохов',
        description: 'Роман-эпопея о донском казачестве в период Первой мировой войны и Гражданской войны в России, главный герой — Григорий Мелехов.',
    },
    {
        id: 5,
        title: 'Евгений Онегин',
        author: 'Александр Пушкин',
        description: 'Роман в стихах, рассказывающий историю пресыщенного светского денди Евгения Онегина и его знакомства с Татьяной Лариной.',
    },
]
</script>
