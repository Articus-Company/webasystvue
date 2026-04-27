<template>
    <Menu style="width: 300px">
        <MenuSection bottom-padded>
            <MenuItem>
                <i class="fas fa-plus"/>
                <span>New Project</span>
            </MenuItem>
        </MenuSection>

        <MenuSection
            selected
            rounded
        >
            <MenuItem>
                <i class="fas fa-chart-line"/>
                <span>Dashboard</span>
            </MenuItem>
        </MenuSection>

        <MenuSection>
            <MenuItem>
                <MenuItemCount>12</MenuItemCount>
                <i class="fas fa-tasks"/>
                <span>Tasks</span>
            </MenuItem>

            <Menu>
                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-folder"/>
                        <span>Frontend</span>
                    </MenuItem>

                    <Menu>
                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-bug"/>
                                <MenuItemCount action>
                                    <i class="fas fa-plus"/>
                                </MenuItemCount>
                                <span>Bugfixes</span>
                            </MenuItem>
                        </MenuSection>

                        <MenuSection>
                            <MenuItem>
                                <i class="fas fa-paint-brush"/>
                                <span>UI Improvements</span>
                            </MenuItem>
                        </MenuSection>
                    </Menu>
                </MenuSection>

                <MenuSection>
                    <MenuItem>
                        <i class="fas fa-server"/>
                        <span>Backend</span>
                    </MenuItem>
                </MenuSection>
            </Menu>
        </MenuSection>

        <MenuSection
            accented
            rounded
        >
            <MenuItem>
                <Icon>
                    <Userpic
                        as="img"
                        src="/wa-content/img/userpic.svg"
                        alt="John"
                    />
                </Icon>
                <span>
                    User
                </span>
            </MenuItem>
        </MenuSection>

        <MenuSection>
            <MenuItem>
                <Icon>
                    <Userpic
                        as="img"
                        src="/wa-content/img/company.svg"
                        alt="Компания"
                    />
                </Icon>
                <span>
                    Team
                    <span class="hint">
                        5 members online
                    </span>
                </span>
            </MenuItem>
        </MenuSection>

        <MenuSection>
            <MenuItem>
                <MenuItemCount>
                    <Badge>3</Badge>
                </MenuItemCount>
                <i class="fas fa-bell"/>
                <span>Notifications</span>
            </MenuItem>
        </MenuSection>

        <MenuSection class="tag">
            <MenuItem>
                <i class="fas fa-cog"/>
                <span>Settings</span>
            </MenuItem>
        </MenuSection>
    </Menu>
</template>

<script setup lang="ts">
import {
    Badge,
    Icon,
    Menu,
    MenuItem,
    MenuItemCount,
    MenuSection,
    Userpic,
} from 'webasystvue'
</script>
