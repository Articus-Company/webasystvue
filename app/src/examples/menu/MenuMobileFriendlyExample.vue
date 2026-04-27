<template>
    <Menu
        style="width: 300px"
        mobile-friendly
    >
        <MenuSection>
            <MenuItem>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            </MenuItem>
        </MenuSection>
        <MenuSection>
            <MenuItem>
                <span>Item 2</span>
            </MenuItem>
        </MenuSection>
        <MenuSection>
            <MenuItem>
                <span>Item 3</span>
            </MenuItem>
        </MenuSection>
    </Menu>
</template>

<script setup lang="ts">
import {
    Menu,
    MenuItem,
    MenuSection,
} from 'webasystvue'
</script>
