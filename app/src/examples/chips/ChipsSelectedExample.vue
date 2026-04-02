<template>
    <Chips>
        <ChipsSection selected>
            <ChipsItem>
                Завтрак
            </ChipsItem>
        </ChipsSection>
        <ChipsSection selected>
            <ChipsItem>
                Обед
            </ChipsItem>
        </ChipsSection>
        <ChipsSection selected>
            <ChipsItem>
                Полдник
            </ChipsItem>
        </ChipsSection>
        <ChipsSection selected>
            <ChipsItem>
                Ужин
            </ChipsItem>
        </ChipsSection>
    </Chips>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsSection } from 'webasystvue'
</script>
