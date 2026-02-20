<template>
    <Sidebar flexbox>
        <SidebarHeader>
            <Menu>
                <router-link
                    v-slot="{ href, navigate, isActive }"
                    :to="{ name: 'home' }"
                    custom
                >
                    <MenuSection :selected="isActive">
                        <MenuItem
                            as="a"
                            :href="href"
                            @click="navigate"
                        >
                            <i class="fas fa-home"/>
                            <span>Главная</span>
                        </MenuItem>
                    </MenuSection>
                </router-link>
                <router-link
                    v-slot="{ href, navigate, isActive }"
                    :to="{ name: 'docs-getting-started' }"
                    custom
                >
                    <MenuSection :selected="isActive">
                        <MenuItem
                            as="a"
                            :href="href"
                            @click="navigate"
                        >
                            <i class="fas fa-rocket"/>
                            <span>Начало работы</span>
                        </MenuItem>
                    </MenuSection>
                </router-link>
            </Menu>
        </SidebarHeader>
        <hr class="custom-mb-0">
        <SidebarBody>
            <Menu>
                <router-link
                    v-for="route in routes"
                    v-slot="{ href, navigate, isActive }"
                    :key="route.routeName"
                    :to="{ name: route.routeName }"
                    custom
                >
                    <MenuSection :selected="isActive">
                        <MenuItem
                            as="a"
                            :href="href"
                            @click="navigate"
                        >
                            {{ route.name }}
                        </MenuItem>
                    </MenuSection>
                </router-link>
            </Menu>
        </SidebarBody>
        <hr class="custom-mb-0">
        <SidebarFooter>
            <Menu>
                <MenuSection>
                    <MenuItem
                        as="a"
                        href="https://github.com/articus-company/webasystvue"
                        target="_blank"
                    >
                        <i class="fab fa-github"/>
                        <span>GitHub</span>
                        <MenuItemCount>
                            <i class="fas fa-external-link-alt hint"/>
                        </MenuItemCount>
                    </MenuItem>
                    <MenuItem
                        as="a"
                        href="https://www.npmjs.com/package/webasystvue"
                        target="_blank"
                    >
                        <i class="fab fa-npm"/>
                        <span>npm</span>
                        <MenuItemCount>
                            <i class="fas fa-external-link-alt hint"/>
                        </MenuItemCount>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </SidebarFooter>
    </Sidebar>
</template>

<script setup lang="ts">
import {
    Menu,
    MenuItem,
    MenuItemCount,
    MenuSection,
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
} from 'webasystvue'

const routes = [
    {
        name: 'Alert',
        routeName: 'docs-alert',
    },
    {
        name: 'Article',
        routeName: 'docs-article',
    },
    {
        name: 'Badge',
        routeName: 'docs-badge',
    },
    {
        name: 'Banner',
        routeName: 'docs-banner',
    },
    {
        name: 'Bottombar',
        routeName: 'docs-bottombar',
    },
    {
        name: 'Box',
        routeName: 'docs-box',
    },
    {
        name: 'Breadcrumbs',
        routeName: 'docs-breadcrumbs',
    },
    {
        name: 'Bricks',
        routeName: 'docs-bricks',
    },
    {
        name: 'Button',
        routeName: 'docs-button',
    },
    {
        name: 'Card',
        routeName: 'docs-card',
    },
    {
        name: 'Chips',
        routeName: 'docs-chips',
    },
    {
        name: 'Content',
        routeName: 'docs-content',
    },
    {
        name: 'Flexbox',
        routeName: 'docs-flexbox',
    },
    {
        name: 'Heading',
        routeName: 'docs-heading',
    },
    {
        name: 'Icon',
        routeName: 'docs-icon',
    },
    {
        name: 'Inlinebox',
        routeName: 'docs-inlinebox',
    },
    {
        name: 'List',
        routeName: 'docs-list',
    },
    {
        name: 'Menu',
        routeName: 'docs-menu',
    },
    {
        name: 'Paging',
        routeName: 'docs-paging',
    },
    {
        name: 'Sidebar',
        routeName: 'docs-sidebar',
    },
    {
        name: 'Spinner',
        routeName: 'docs-spinner',
    },
    {
        name: 'Tablebox',
        routeName: 'docs-tablebox',
    },
    {
        name: 'Table',
        routeName: 'docs-table',
    },
    {
        name: 'Tabs',
        routeName: 'docs-tabs',
    },
    {
        name: 'Thumbs',
        routeName: 'docs-thumbs',
    },
    {
        name: 'Userpic',
        routeName: 'docs-userpic',
    },
]
</script>
