<template>
    <div style="width: 300px">
        <Bricks>
            <BricksItem selected>
                <BricksItemIcon>
                    <i class="fas fa-star"/>
                </BricksItemIcon>
                <BricksItemCount>
                    495
                    <i class="fas fa-lock"/>
                </BricksItemCount>
                Москва
            </BricksItem>
            <BricksItem>
                <BricksItemIcon>
                    <i class="fas fa-torii-gate"/>
                </BricksItemIcon>
                <BricksItemCount>
                    + 23 °C
                </BricksItemCount>
                Токио 🗼
            </BricksItem>
            <BricksItem accented>
                <BricksItemIcon>
                    <i class="fas fa-mask"/>
                </BricksItemIcon>
                Рио-де-Жанейро
            </BricksItem>
            <BricksItem>
                <BricksItemIcon>
                    <i class="fas fa-heart"/>
                </BricksItemIcon>
                <BricksItemCount>
                    New!
                </BricksItemCount>
                Санкт-Петербург
            </BricksItem>
            <BricksItem>
                <BricksItemIcon>
                    <i class="fas fa-tree"/>
                </BricksItemIcon>
                <BricksItemCount>
                    <Badge>99+</Badge>
                </BricksItemCount>
                Ванкувер
            </BricksItem>
            <BricksItem
                style="background: linear-gradient(90deg, #E6CF00 0%, #F5A300 100%)"
                selected
            >
                <BricksItemIcon>
                    <i class="fas fa-sun"/>
                </BricksItemIcon>
                Сочи
            </BricksItem>
            <BricksItem
                style="background: linear-gradient(135deg, #444CF755 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #444CF7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #444CF755 25%, transparent 25%) 0 0/ 20px 20px, linear-gradient(45deg, #444CF7 25%, #E5E5F7 25%) 0 0/ 20px 20px;"
                full-width
            >
                <BricksItemIcon/>
                <b
                    style="color: #f31;"
                    class="larger"
                >
                    .full-width
                </b>
            </BricksItem>
            <BricksItem>
                <BricksItemIcon>
                    <i class="fas fa-church"/>
                </BricksItemIcon>
                Ватикан
            </BricksItem>
            <BricksItem>
                <BricksItemIcon>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Regional_Emblem_of_Hong_Kong.svg/2560px-Regional_Emblem_of_Hong_Kong.svg.png"
                        alt="Гонконг"
                    >
                </BricksItemIcon>
                Гонконг
            </BricksItem>
        </Bricks>
    </div>
</template>

<script setup lang="ts">
import { Badge, Bricks, BricksItem, BricksItemCount, BricksItemIcon } from 'webasystvue'
</script>
