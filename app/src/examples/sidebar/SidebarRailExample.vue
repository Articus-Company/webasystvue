<template>
    <Sidebar
        flexbox
        rail
    >
        <SidebarHeader>
            <Menu>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-star"/>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </SidebarHeader>

        <SidebarBody>
            <Menu>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-globe-africa"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-umbrella"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-heart"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-tree"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-terminal"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-paw"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-leaf"/>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </SidebarBody>

        <SidebarFooter>
            <Menu>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-cog"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-external-link-alt"/>
                    </MenuItem>
                </MenuSection>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-door-open"/>
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
    MenuSection,
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
} from 'webasystvue'
</script>
