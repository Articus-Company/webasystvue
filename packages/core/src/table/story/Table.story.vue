<template>
    <Story title="Table/Demo">
        <Variant title="default">
            <Table>
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
        <Variant title="sized">
            <Table size="smallest">
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
        <Variant title="bigdata">
            <Table bigdata>
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
        <Variant title="zebra">
            <Table zebra>
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
        <Variant title="bordered">
            <Table bordered>
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
        <Variant title="borderless">
            <Table borderless>
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
        <Variant title="single lined">
            <Table
                zebra
                single-lined
            >
                <TableHeader>
                    <TableRow>
                        <TableHead class="min-width"/>
                        <TableHead>
                            <span class="nowrap">
                                Title <i class="fas fa-caret-down"/>
                            </span>
                        </TableHead>
                        <TableHead>
                            Description
                        </TableHead>
                        <TableHead class="align-right">
                            Amount
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow
                        v-for="i in 5"
                        :key="i"
                        :selected="i === 2"
                    >
                        <TableCell
                            min-width
                            vertical-align="top"
                        >
                            <input
                                type="checkbox"
                                :checked="i === 2"
                            >
                        </TableCell>
                        <TableCell>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <i class="shortener"/>
                            </div>
                        </TableCell>
                        <TableCell max-width>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <i class="shortener"/>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <i class="shortener"/>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Variant>
        <Variant title="table scrollable x">
            <TableScrollableX>
                <Table zebra>
                    <TableHeader>
                        <TableRow>
                            <TableHead/>
                            <TableHead>
                                <span class="nowrap">
                                    Title <i class="fas fa-caret-down"/>
                                </span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="i in 5"
                            :key="i"
                            :selected="i === 2"
                        >
                            <TableCell vertical-align="top">
                                <input
                                    type="checkbox"
                                    :checked="i === 2"
                                >
                            </TableCell>
                            <TableCell>
                                <div class="nowrap">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableScrollableX>
        </Variant>
        <Variant title="caption">
            <Table>
                <TableCaption>
                    Table Caption
                </TableCaption>
                <TableRow>
                    <TableHead/>
                    <TableHead>
                        <span>
                            Name <i class="fas fa-caret-down"/>
                        </span>
                    </TableHead>
                    <TableHead align="center">
                        URL
                    </TableHead>
                    <TableHead align="right">
                        #
                    </TableHead>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Главная</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        1
                    </TableCell>
                </TableRow>
                <TableRow selected>
                    <TableCell min-width>
                        <input
                            type="checkbox"
                            :checked="true"
                        >
                    </TableCell>
                    <TableCell>Новости</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        24
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Блог</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right"/>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Магазин</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        <span class="badge yellow">5</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell min-width>
                        <input type="checkbox">
                    </TableCell>
                    <TableCell>Поддержка</TableCell>
                    <TableCell align="center">
                        javascript:void(0);
                    </TableCell>
                    <TableCell align="right">
                        6
                    </TableCell>
                </TableRow>
            </Table>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableScrollableX,
} from '@/table'
</script>
