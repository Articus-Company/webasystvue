<template>
    <Sidebar height-auto>
        <Menu>
            <MenuSection>
                <MenuItem>
                    <i class="fas fa-apple-alt"/>
                    <span>Apple</span>
                </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuItem>
                    <i class="fas fa-lemon"/>
                    <span>Lemon</span>
                </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuItem>
                    <i class="fas fa-carrot"/>
                    <span>Carrot</span>
                </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuItem>
                    <i class="fas fa-pepper-hot"/>
                    <span>Pepper hot</span>
                </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuItem>
                    <i class="fas fa-ice-cream"/>
                    <span>Ice cream</span>
                </MenuItem>
            </MenuSection>
            <MenuSection>
                <MenuItem>
                    <i class="fas fa-cheese"/>
                    <span>Cheese</span>
                </MenuItem>
            </MenuSection>
        </Menu>
    </Sidebar>
</template>

<script setup lang="ts">
import {
    Menu,
    MenuItem,
    MenuSection,
    Sidebar,
} from 'webasystvue'
</script>
