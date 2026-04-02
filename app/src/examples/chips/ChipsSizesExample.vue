<template>
    <p>
        <Chips>
            <ChipsSection
                v-for="size in sizes"
                :key="size"
                :size="size"
            >
                <ChipsItem>
                    {{ size }}
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
    <p>
        <Chips size="large">
            <ChipsSection>
                <ChipsItem>
                    Можно
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    применить
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    размер
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    на
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    все
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    чипсы
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    сразу
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsSection } from 'webasystvue'

const sizes = [
    'smallest',
    'smaller',
    'small',
    'large',
    'larger',
    'largest',
]
</script>
