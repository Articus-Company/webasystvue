<template>
    <p>
        <Chips transparent>
            <ChipsSection
                v-for="ext in extensions"
                :key="ext"
            >
                <ChipsItem>
                    {{ ext }}
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
    <p>
        <Chips>
            <ChipsSection transparent>
                <ChipsItem>
                    Миллиметр
                </ChipsItem>
            </ChipsSection>
            <ChipsSection transparent>
                <ChipsItem>
                    Сантиметр
                </ChipsItem>
            </ChipsSection>
            <ChipsSection transparent>
                <ChipsItem>
                    Метр
                </ChipsItem>
            </ChipsSection>
            <ChipsSection transparent>
                <ChipsItem>
                    Километр
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsSection } from 'webasystvue'

const extensions = [
    'txt',
    'jpg',
    'png',
    'pdf',
    'mp3',
    'mp4',
]
</script>
