<template>
    <Story title="Tabs/Demo">
        <Variant title="default">
            <Tabs>
                <TabsSection>
                    <TabsItem>
                        Главная
                        <TabsItemCount>
                            1
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection selected>
                    <TabsItem>
                        Новости
                        <TabsItemCount>
                            24
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Блог
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        <i class="fas fa-globe"/>
                        Магазин
                        <TabsItemCount>
                            <span class="badge">
                                5
                            </span>
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Поддержка
                        <TabsItemCount>
                            6
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <button class="purple">
                        Открыть витрину
                    </button>
                </TabsSection>
            </Tabs>
        </Variant>
        <Variant title="sized">
            <Tabs size="smallest">
                <TabsSection>
                    <TabsItem>
                        Главная
                        <TabsItemCount>
                            1
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection selected>
                    <TabsItem>
                        Новости
                        <TabsItemCount>
                            24
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Блог
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        <i class="fas fa-globe"/>
                        Магазин
                        <TabsItemCount>
                            <span class="badge">
                                5
                            </span>
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Поддержка
                        <TabsItemCount>
                            6
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <button class="purple">
                        Открыть витрину
                    </button>
                </TabsSection>
            </Tabs>
            <Tabs size="largest">
                <TabsSection>
                    <TabsItem>
                        Главная
                        <TabsItemCount>
                            1
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection selected>
                    <TabsItem>
                        Новости
                        <TabsItemCount>
                            24
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Блог
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        <i class="fas fa-globe"/>
                        Магазин
                        <TabsItemCount>
                            <span class="badge">
                                5
                            </span>
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Поддержка
                        <TabsItemCount>
                            6
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <button class="purple">
                        Открыть витрину
                    </button>
                </TabsSection>
            </Tabs>
        </Variant>
        <Variant title="bordered bottom">
            <Tabs bordered-bottom>
                <TabsSection>
                    <TabsItem>
                        Главная
                        <TabsItemCount>
                            1
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection selected>
                    <TabsItem>
                        Новости
                        <TabsItemCount>
                            24
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Блог
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        <i class="fas fa-globe"/>
                        Магазин
                        <TabsItemCount>
                            <span class="badge">
                                5
                            </span>
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <TabsItem>
                        Поддержка
                        <TabsItemCount>
                            6
                        </TabsItemCount>
                    </TabsItem>
                </TabsSection>
                <TabsSection>
                    <button class="purple">
                        Открыть витрину
                    </button>
                </TabsSection>
            </Tabs>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Tabs, TabsItem, TabsItemCount, TabsSection } from '@/tabs'
</script>
