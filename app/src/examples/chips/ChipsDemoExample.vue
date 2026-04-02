<template>
    <Chips>
        <ChipsSection>
            <ChipsItem>
                <i class="fas fa-star"/>
                Москва
                <ChipsItemCount>
                    495 🔒
                </ChipsItemCount>
            </ChipsItem>
        </ChipsSection>
        <ChipsSection accented>
            <ChipsItem>
                <i class="fas fa-mountain custom-mr-4"/>
                Сочи
            </ChipsItem>
        </ChipsSection>
        <ChipsSection class="desktop-and-tablet-only">
            <ChipsItem>
                <i class="fas fa-heart"/>
                Санкт-Петербург
                <ChipsItemCount>
                    New!
                </ChipsItemCount>
            </ChipsItem>
        </ChipsSection>
        <ChipsSection>
            <ChipsItem>
                Токио 🗼
            </ChipsItem>
        </ChipsSection>
        <ChipsSection>
            <ChipsItem>
                🇭🇰
                Гонконг
            </ChipsItem>
        </ChipsSection>
        <ChipsSection outlined>
            <ChipsItem>
                Шанхай
                <ChipsItemCount>
                    <i class="fas fa-lock"/>
                </ChipsItemCount>
            </ChipsItem>
        </ChipsSection>
        <ChipsSection>
            <ChipsItem>
                <span class="wa-checkbox">
                    <input
                        id="checkbox"
                        type="checkbox"
                        name="1"
                        checked
                    >
                    <span>
                        <span class="icon">
                            <i class="fas fa-check"/>
                        </span>
                    </span>
                </span>
                Сидней
                <ChipsItemCount>
                    31000222
                </ChipsItemCount>
            </ChipsItem>
        </ChipsSection>
        <ChipsSection>
            <ChipsItem>
                <img
                    src="/wa-content/img/userpic20@2x.jpg"
                    alt="Париж"
                    class="userpic"
                >
                Париж
            </ChipsItem>
        </ChipsSection>
        <ChipsSection>
            <ChipsItem>
                <i class="fas fa-mask custom-mr-4"/>
                Рио-де-Жанейро
            </ChipsItem>
        </ChipsSection>
        <ChipsSection class="selected">
            <ChipsItem>
                Лима
            </ChipsItem>
        </ChipsSection>
        <ChipsSection
            class="desktop-and-tablet-only"
            rounded
        >
            <ChipsItem>
                Сан-Франциско 🌁
            </ChipsItem>
        </ChipsSection>
        <ChipsSection transparent>
            <ChipsItem>
                <i class="fas fa-tree"/>
                Парамарибо
            </ChipsItem>
        </ChipsSection>
        <ChipsSection
            tag
            selected
        >
            <ChipsItem>
                <i class="fas fa-hashtag"/>
                webasyst2
            </ChipsItem>
        </ChipsSection>
        <ChipsSection tag>
            <ChipsItem>
                <i class="fas fa-hashtag"/>
                ui
            </ChipsItem>
        </ChipsSection>
    </Chips>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsItemCount, ChipsSection } from 'webasystvue'
</script>
