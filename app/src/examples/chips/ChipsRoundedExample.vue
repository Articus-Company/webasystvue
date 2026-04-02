<template>
    <p>
        <Chips rounded>
            <ChipsSection
                v-for="day in daysOfWeek"
                :key="day"
            >
                <ChipsItem>
                    {{ day }}
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
    <p>
        <Chips>
            <ChipsSection rounded>
                <ChipsItem>
                    <i class="fas fa-coffee"/>
                    Утро
                </ChipsItem>
            </ChipsSection>
            <ChipsSection rounded>
                <ChipsItem>
                    <i class="fas fa-sun"/>
                    День
                </ChipsItem>
            </ChipsSection>
            <ChipsSection rounded>
                <ChipsItem>
                    <i class="fas fa-cloud-moon"/>
                    Вечер
                </ChipsItem>
            </ChipsSection>
            <ChipsSection rounded>
                <ChipsItem>
                    <i class="fas fa-moon"/>
                    Ночь
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsSection } from 'webasystvue'

const daysOfWeek = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
]
</script>
