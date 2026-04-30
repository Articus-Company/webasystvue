<template>
    <Table
        style="width: 500px"
        bordered
    >
        <TableHeader style="height: 6rem">
            <TableRow>
                <TableHead
                    align="left"
                    vertical-align="top"
                >
                    Left Top
                </TableHead>
                <TableHead
                    align="center"
                    vertical-align="middle"
                >
                    Center Middle
                </TableHead>
                <TableHead
                    align="right"
                    vertical-align="bottom"
                >
                    Right Bottom
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell
                    align="left"
                    vertical-align="top"
                >
                    top left
                </TableCell>
                <TableCell
                    align="center"
                    vertical-align="top"
                >
                    Длинный текст, чтобы увеличить высоту строки. Вертикальное выравнивание top.
                </TableCell>
                <TableCell
                    align="right"
                    vertical-align="top"
                >
                    top right
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell
                    align="left"
                    vertical-align="middle"
                >
                    middle left
                </TableCell>
                <TableCell
                    align="center"
                    vertical-align="middle"
                >
                    Длинный текст, чтобы увеличить высоту строки. Вертикальное выравнивание middle.
                </TableCell>
                <TableCell
                    align="right"
                    vertical-align="middle"
                >
                    middle right
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell
                    align="left"
                    vertical-align="bottom"
                >
                    bottom left
                </TableCell>
                <TableCell
                    align="center"
                    vertical-align="bottom"
                >
                    Длинный текст, чтобы увеличить высоту строки. Вертикальное выравнивание bottom.
                </TableCell>
                <TableCell
                    align="right"
                    vertical-align="bottom"
                >
                    bottom right
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
</script>
