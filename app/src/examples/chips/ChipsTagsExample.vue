<template>
    <p>
        <Chips tags>
            <ChipsSection
                v-for="lang in languages"
                :key="lang"
            >
                <ChipsItem>
                    <i class="fas fa-hashtag"/>
                    {{ lang }}
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
    <p>
        <Chips>
            <ChipsSection tag>
                <ChipsItem>
                    <i class="fas fa-hashtag"/>
                    Рок
                </ChipsItem>
            </ChipsSection>
            <ChipsSection tag>
                <ChipsItem>
                    <i class="fas fa-hashtag"/>
                    Электроника
                </ChipsItem>
            </ChipsSection>
            <ChipsSection tag>
                <ChipsItem>
                    <i class="fas fa-hashtag"/>
                    Фонк
                </ChipsItem>
            </ChipsSection>
            <ChipsSection tag>
                <ChipsItem>
                    <i class="fas fa-hashtag"/>
                    Классика
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsSection } from 'webasystvue'

const languages = [
    'Python',
    'Java',
    'C++',
    'PHP',
    'JavaScript',
    'Go',
    'Rust',
    'TypeScript',
]
</script>
