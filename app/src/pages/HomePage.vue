<style scoped>
.image-container {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
}

.image-bg {
    width: 250px;
    height: 250px;
    background: linear-gradient(-45deg, #42d392 50%, #647eff 50%);
    filter: blur(68px);
    border-radius: 50%;
    position: absolute;
    animation: hero-logo-bg 10s linear infinite;
}

.image-src {
    filter: drop-shadow(-2px 4px 6px #0003);
    max-width: 200px;
    max-height: 200px;
}

.hero-name {
    background: linear-gradient(90deg, #42b883, #647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    line-height: 1.3;
    margin-bottom: 0;
    font-size: 4rem;
    font-weight: bold;
}

@keyframes hero-logo-bg {
    0% {
        transform: rotate(0deg);
        filter: blur(68px) hue-rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        filter: blur(68px) hue-rotate(360deg);
    }
}
</style>

<template>
    <PageLayout>
        <Article wider>
            <ArticleBody>
                <Flexbox
                    class="custom-mt-48"
                    fixed
                >
                    <div>
                        <p class="hero-name">
                            WebasystVue
                        </p>
                        <h3 class="gray custom-mt-0">
                            Задекларированная Vue 3 библиотека компонентов Webasyst
                        </h3>
                        <p class="custom-mt-48">
                            <router-link
                                v-slot="{ href, navigate }"
                                to="docs"
                                custom
                            >
                                <Button
                                    as="a"
                                    :href="href"
                                    class="space-glow"
                                    color="purple"
                                    size="larger"
                                    rounded
                                    gradient
                                    @click="navigate"
                                >
                                    <span class="bold">
                                        Начать
                                        <i class="fas fa-arrow-right"/>
                                    </span>
                                </Button>
                            </router-link>
                            <Button
                                as="a"
                                href="https://github.com/articus-company/webasystvue"
                                target="_blank"
                                color="light-gray"
                                size="larger"
                                rounded
                            >
                                <span class="bold">
                                    <i class="fab fa-github"/>
                                    GitHub
                                    <i class="fas fa-external-link-alt hint"/>
                                </span>
                            </Button>
                        </p>
                    </div>
                    <div>
                        <div class="image-container">
                            <div class="image-bg"/>
                            <img
                                class="image-src"
                                src="/wa-apps/webasystvue/assets/img/logo.svg"
                                alt=""
                            >
                        </div>
                    </div>
                </Flexbox>
                <GridLayout style="margin-top: 12rem">
                    <FeaturedCard>
                        <template #icon>
                            🦾
                        </template>
                        <template #title>
                            TypeScript
                        </template>
                        Все компоненты и их варианты строго задекларированы
                    </FeaturedCard>
                    <FeaturedCard>
                        <template #icon>
                            ✨
                        </template>
                        <template #title>
                            Подсказки IDE и автодополнение
                        </template>
                        Все варианты, размеры и состояния доступны через автодополнение IDE
                    </FeaturedCard>
                    <FeaturedCard>
                        <template #icon>
                            🤝
                        </template>
                        <template #title>
                            Совместимость с jQuery
                        </template>
                        Компоненты являются тонкой обёрткой над CSS и не изменяют поведение DOM
                    </FeaturedCard>
                    <FeaturedCard>
                        <template #icon>
                            🪾
                        </template>
                        <template #title>
                            Tree-shaking
                        </template>
                        В итоговый bundle попадают только используемые компоненты
                    </FeaturedCard>
                    <FeaturedCard>
                        <template #icon>
                            🚀
                        </template>
                        <template #title>
                            Ускорение разработки
                        </template>
                        Типы и автодополнение IDE позволяют создавать интерфейсы быстрее и снижать количество ошибок.
                    </FeaturedCard>
                </GridLayout>
            </ArticleBody>
        </Article>
    </PageLayout>
</template>

<script setup lang="ts">
import { Article, ArticleBody, Button, Flexbox } from 'webasystvue'
import { FeaturedCard } from '@/components/hero/featured-card'
import { GridLayout, PageLayout } from '@/layouts'
</script>
