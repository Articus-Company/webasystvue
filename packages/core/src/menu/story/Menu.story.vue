<template>
    <Story title="Menu/Demo">
        <Variant title="default">
            <Menu>
                <MenuSection bottom-padded>
                    <MenuItem>
                        <i class="fas fa-plus"/>
                        <span>Создать</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-home"/>
                        <span>Главная</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    selected
                    rounded
                >
                    <MenuItem>
                        <MenuItemCount>
                            5
                        </MenuItemCount>
                        <span class="icon">✏️</span>
                        <span>Блог</span>
                    </MenuItem>
                    <Menu>
                        <MenuSection>
                            <MenuItem>
                                <i
                                    class="fas fa-crown"
                                    style="color: gold"
                                />
                                <span>Hello</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i style="background: orangered"/>
                                </span>
                                <span>
                                    Custom icon
                                </span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i
                                        class="rounded"
                                        style="background: orangered"
                                    />
                                </span>
                                <span>Custom icon rounded</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-globe"/>
                                <span>World</span>
                            </MenuItem>
                            <Menu>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-folder"/>
                                        <MenuItemCount action>
                                            <i class="fas fa-plus-circle"/>
                                        </MenuItemCount>
                                        <span>Moscow</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-tree"/>
                                        <span>Sochi</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-church"/>
                                        <MenuItemCount>
                                            13
                                        </MenuItemCount>
                                        <span>
                                            Saint-Petersburg
                                            <span class="hint">
                                                <i class="fas fa-crown"/>
                                            </span>
                                        </span>
                                    </MenuItem>
                                </MenuSection>
                            </Menu>
                        </MenuSection>
                    </Menu>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            23
                        </MenuItemCount>
                        <span class="icon">
                            🪟
                        </span>
                        <span>Сайт</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection class="tag">
                    <MenuItem>
                        <MenuItemCount>
                            2
                        </MenuItemCount>
                        <i class="fas fa-hashtag"/>
                        <span>
                            .tag
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    accented
                    rounded
                >
                    <MenuItem>
                        <span class="icon">
                            🙍🏻‍♂️
                        </span>
                        <span>
                            Василий
                            <span class="hint">
                                <i class="fas fa-thumbs-up"/>
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            <span class="badge">
                                5
                            </span>
                        </MenuItemCount>
                        <span class="icon">
                            🏢
                        </span>
                        <span>
                            Компания
                            <span class="hint">
                                Текстовая подсказка или даже подсказка с иконкой Font Awesome (нет, это эмоджи) оставляется, как всегда, внутри .hint
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </Variant>
        <Variant title="large">
            <Menu large>
                <MenuSection bottom-padded>
                    <MenuItem>
                        <i class="fas fa-plus"/>
                        <span>Создать</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-home"/>
                        <span>Главная</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    selected
                    rounded
                >
                    <MenuItem>
                        <MenuItemCount>
                            5
                        </MenuItemCount>
                        <span class="icon">✏️</span>
                        <span>Блог</span>
                    </MenuItem>
                    <Menu>
                        <MenuSection>
                            <MenuItem>
                                <i
                                    class="fas fa-crown"
                                    style="color: gold"
                                />
                                <span>Hello</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i style="background: orangered"/>
                                </span>
                                <span>
                                    Custom icon
                                </span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i
                                        class="rounded"
                                        style="background: orangered"
                                    />
                                </span>
                                <span>Custom icon rounded</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-globe"/>
                                <span>World</span>
                            </MenuItem>
                            <Menu>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-folder"/>
                                        <MenuItemCount action>
                                            <i class="fas fa-plus-circle"/>
                                        </MenuItemCount>
                                        <span>Moscow</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-tree"/>
                                        <span>Sochi</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-church"/>
                                        <MenuItemCount>
                                            13
                                        </MenuItemCount>
                                        <span>
                                            Saint-Petersburg
                                            <span class="hint">
                                                <i class="fas fa-crown"/>
                                            </span>
                                        </span>
                                    </MenuItem>
                                </MenuSection>
                            </Menu>
                        </MenuSection>
                    </Menu>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            23
                        </MenuItemCount>
                        <span class="icon">
                            🪟
                        </span>
                        <span>Сайт</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection class="tag">
                    <MenuItem>
                        <MenuItemCount>
                            2
                        </MenuItemCount>
                        <i class="fas fa-hashtag"/>
                        <span>
                            .tag
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    accented
                    rounded
                >
                    <MenuItem>
                        <span class="icon">
                            🙍🏻‍♂️
                        </span>
                        <span>
                            Василий
                            <span class="hint">
                                <i class="fas fa-thumbs-up"/>
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            <span class="badge">
                                5
                            </span>
                        </MenuItemCount>
                        <span class="icon">
                            🏢
                        </span>
                        <span>
                            Компания
                            <span class="hint">
                                Текстовая подсказка или даже подсказка с иконкой Font Awesome (нет, это эмоджи) оставляется, как всегда, внутри .hint
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </Variant>
        <Variant title="mobile-friendly">
            <Menu mobile-friendly>
                <MenuSection bottom-padded>
                    <MenuItem>
                        <i class="fas fa-plus"/>
                        <span>Создать</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-home"/>
                        <span>Главная</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    selected
                    rounded
                >
                    <MenuItem>
                        <MenuItemCount>
                            5
                        </MenuItemCount>
                        <span class="icon">✏️</span>
                        <span>Блог</span>
                    </MenuItem>
                    <Menu>
                        <MenuSection>
                            <MenuItem>
                                <i
                                    class="fas fa-crown"
                                    style="color: gold"
                                />
                                <span>Hello</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i style="background: orangered"/>
                                </span>
                                <span>
                                    Custom icon
                                </span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i
                                        class="rounded"
                                        style="background: orangered"
                                    />
                                </span>
                                <span>Custom icon rounded</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-globe"/>
                                <span>World</span>
                            </MenuItem>
                            <Menu>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-folder"/>
                                        <MenuItemCount action>
                                            <i class="fas fa-plus-circle"/>
                                        </MenuItemCount>
                                        <span>Moscow</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-tree"/>
                                        <span>Sochi</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-church"/>
                                        <MenuItemCount>
                                            13
                                        </MenuItemCount>
                                        <span>
                                            Saint-Petersburg
                                            <span class="hint">
                                                <i class="fas fa-crown"/>
                                            </span>
                                        </span>
                                    </MenuItem>
                                </MenuSection>
                            </Menu>
                        </MenuSection>
                    </Menu>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            23
                        </MenuItemCount>
                        <span class="icon">
                            🪟
                        </span>
                        <span>Сайт</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection class="tag">
                    <MenuItem>
                        <MenuItemCount>
                            2
                        </MenuItemCount>
                        <i class="fas fa-hashtag"/>
                        <span>
                            .tag
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    accented
                    rounded
                >
                    <MenuItem>
                        <span class="icon">
                            🙍🏻‍♂️
                        </span>
                        <span>
                            Василий
                            <span class="hint">
                                <i class="fas fa-thumbs-up"/>
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            <span class="badge">
                                5
                            </span>
                        </MenuItemCount>
                        <span class="icon">
                            🏢
                        </span>
                        <span>
                            Компания
                            <span class="hint">
                                Текстовая подсказка или даже подсказка с иконкой Font Awesome (нет, это эмоджи) оставляется, как всегда, внутри .hint
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </Variant>
        <Variant title="ellipsis">
            <Menu ellipsis>
                <MenuSection bottom-padded>
                    <MenuItem>
                        <i class="fas fa-plus"/>
                        <span>Создать</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-home"/>
                        <span>Главная</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    selected
                    rounded
                >
                    <MenuItem>
                        <MenuItemCount>
                            5
                        </MenuItemCount>
                        <span class="icon">✏️</span>
                        <span>Блог</span>
                    </MenuItem>
                    <Menu>
                        <MenuSection>
                            <MenuItem>
                                <i
                                    class="fas fa-crown"
                                    style="color: gold"
                                />
                                <span>Hello</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i style="background: orangered"/>
                                </span>
                                <span>
                                    Custom icon
                                </span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i
                                        class="rounded"
                                        style="background: orangered"
                                    />
                                </span>
                                <span>Custom icon rounded</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-globe"/>
                                <span>World</span>
                            </MenuItem>
                            <Menu>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-folder"/>
                                        <MenuItemCount action>
                                            <i class="fas fa-plus-circle"/>
                                        </MenuItemCount>
                                        <span>Moscow</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-tree"/>
                                        <span>Sochi</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-church"/>
                                        <MenuItemCount>
                                            13
                                        </MenuItemCount>
                                        <span>
                                            Saint-Petersburg
                                            <span class="hint">
                                                <i class="fas fa-crown"/>
                                            </span>
                                        </span>
                                    </MenuItem>
                                </MenuSection>
                            </Menu>
                        </MenuSection>
                    </Menu>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            23
                        </MenuItemCount>
                        <span class="icon">
                            🪟
                        </span>
                        <span>Сайт</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection class="tag">
                    <MenuItem>
                        <MenuItemCount>
                            2
                        </MenuItemCount>
                        <i class="fas fa-hashtag"/>
                        <span>
                            .tag
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    accented
                    rounded
                >
                    <MenuItem>
                        <span class="icon">
                            🙍🏻‍♂️
                        </span>
                        <span>
                            Василий
                            <span class="hint">
                                <i class="fas fa-thumbs-up"/>
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            <span class="badge">
                                5
                            </span>
                        </MenuItemCount>
                        <span class="icon">
                            🏢
                        </span>
                        <span>
                            Компания
                            <span class="hint">
                                Текстовая подсказка или даже подсказка с иконкой Font Awesome (нет, это эмоджи) оставляется, как всегда, внутри .hint
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </Variant>
        <Variant title="break-words">
            <Menu break-words>
                <MenuSection bottom-padded>
                    <MenuItem>
                        <i class="fas fa-plus"/>
                        <span>Создать</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-home"/>
                        <span>Главная</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    selected
                    rounded
                >
                    <MenuItem>
                        <MenuItemCount>
                            5
                        </MenuItemCount>
                        <span class="icon">✏️</span>
                        <span>Блог</span>
                    </MenuItem>
                    <Menu>
                        <MenuSection>
                            <MenuItem>
                                <i
                                    class="fas fa-crown"
                                    style="color: gold"
                                />
                                <span>Hello</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i style="background: orangered"/>
                                </span>
                                <span>
                                    Custom icon
                                </span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <span class="icon">
                                    <i
                                        class="rounded"
                                        style="background: orangered"
                                    />
                                </span>
                                <span>Custom icon rounded</span>
                            </MenuItem>
                        </MenuSection>
                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-globe"/>
                                <span>World</span>
                            </MenuItem>
                            <Menu>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-folder"/>
                                        <MenuItemCount action>
                                            <i class="fas fa-plus-circle"/>
                                        </MenuItemCount>
                                        <span>Moscow</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-tree"/>
                                        <span>Sochi</span>
                                    </MenuItem>
                                </MenuSection>
                                <MenuSection>
                                    <MenuItem>
                                        <i class="fas fa-church"/>
                                        <MenuItemCount>
                                            13
                                        </MenuItemCount>
                                        <span>
                                            Saint-Petersburg
                                            <span class="hint">
                                                <i class="fas fa-crown"/>
                                            </span>
                                        </span>
                                    </MenuItem>
                                </MenuSection>
                            </Menu>
                        </MenuSection>
                    </Menu>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            23
                        </MenuItemCount>
                        <span class="icon">
                            🪟
                        </span>
                        <span>Сайт</span>
                    </MenuItem>
                </MenuSection>
                <MenuSection class="tag">
                    <MenuItem>
                        <MenuItemCount>
                            2
                        </MenuItemCount>
                        <i class="fas fa-hashtag"/>
                        <span>
                            .tag
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection
                    accented
                    rounded
                >
                    <MenuItem>
                        <span class="icon">
                            🙍🏻‍♂️
                        </span>
                        <span>
                            Василий
                            <span class="hint">
                                <i class="fas fa-thumbs-up"/>
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <MenuItemCount>
                            <span class="badge">
                                5
                            </span>
                        </MenuItemCount>
                        <span class="icon">
                            🏢
                        </span>
                        <span>
                            Компания
                            <span class="hint">
                                Текстовая подсказка или даже подсказка с иконкой Font Awesome (нет, это эмоджи) оставляется, как всегда, внутри .hint
                            </span>
                        </span>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Menu, MenuItem, MenuItemCount, MenuSection } from '@/menu'
</script>
