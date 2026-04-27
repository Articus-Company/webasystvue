<template>
    <Menu style="width: 300px">
        <MenuSection bottom-padded>
            <MenuItem>
                <span>Bottom Padded</span>
            </MenuItem>
        </MenuSection>
        <MenuSection>
            <MenuItem>
                <span>Item 1</span>
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
import { Menu, MenuItem, MenuSection } from 'webasystvue'
</script>
