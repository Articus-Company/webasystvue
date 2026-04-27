<template>
    <Menu style="width: 300px">
        <MenuSection>
            <MenuItem>
                <span>Item 1</span>
            </MenuItem>
        </MenuSection>
        <MenuSection selected>
            <MenuItem>
                <span>Selected</span>
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
import { Menu, MenuItem, MenuSection } from 'webasystvue'
</script>
