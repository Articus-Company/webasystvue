<template>
    <Sidebar
        flexbox
        width="26"
    >
        <SidebarHeader>
            <Bricks>
                <BricksItem full-width>
                    <BricksItemIcon>
                        <i class="fas fa-book"/>
                    </BricksItemIcon>
                    Документация
                </BricksItem>
            </Bricks>
        </SidebarHeader>

        <SidebarBody>
            <Heading>
                Начало работы
            </Heading>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        Установка
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Структура проекта
                    </MenuItem>
                </MenuSection>
            </Menu>

            <Heading>
                Сборка приложения
            </Heading>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        Маршрутизация
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Получение данных
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Рендеринг
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Кэширование
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Стилизация
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Оптимизация
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Конфигурирование
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Тестирование
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Аутентификация
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Деплой
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Обновление версии
                    </MenuItem>
                </MenuSection>
            </Menu>

            <Heading>
                Примеры
            </Heading>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        Примеры кода
                    </MenuItem>
                </MenuSection>
            </Menu>

            <Heading>
                Справочник API
            </Heading>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        Компоненты
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Соглашения по файлам
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Функции
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Опции
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        CLI
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Edge Runtime
                    </MenuItem>
                </MenuSection>
            </Menu>

            <Heading>
                Архитектура
            </Heading>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        Архитектура Next.js
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Доступность
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Fast Refresh
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Компилятор Next.js
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Поддерживаемые браузеры
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        Turbopack
                    </MenuItem>
                </MenuSection>
            </Menu>

            <Heading>
                Сообщество
            </Heading>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        Участие в разработке
                    </MenuItem>
                </MenuSection>
            </Menu>
        </SidebarBody>

        <SidebarFooter>
            <Bricks>
                <BricksItem full-width>
                    <BricksItemIcon>
                        <i class="fas fa-user"/>
                    </BricksItemIcon>
                    Профиль
                </BricksItem>
                <BricksItem full-width>
                    <BricksItemIcon>
                        <i class="fas fa-door-open"/>
                    </BricksItemIcon>
                    Выход
                </BricksItem>
            </Bricks>
        </SidebarFooter>
    </Sidebar>
</template>

<script setup lang="ts">
import {
    Bricks,
    BricksItem,
    BricksItemIcon,
    Heading,
    Menu,
    MenuItem,
    MenuSection,
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
} from 'webasystvue'
</script>
