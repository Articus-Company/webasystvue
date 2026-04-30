<template>
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
                    <Badge>
                        5
                    </Badge>
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
            <Button color="purple">
                Открыть витрину
            </Button>
        </TabsSection>
    </Tabs>
</template>

<script setup lang="ts">
import {
    Badge,
    Button,
    Tabs,
    TabsItem,
    TabsItemCount,
    TabsSection,
} from 'webasystvue'
</script>
