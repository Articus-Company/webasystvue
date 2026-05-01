<style scoped>
.install-command {
    padding: 15px 20px;
    background-color: hsl(var(--webasystvue-card-background));
    border-radius: 0.75rem;
    margin-top: 1rem;
    font-family: monospace, monospace;
    color: var(--menu-selected-link-color);
    position: relative;
}
.button-copy {
    position: absolute;
    right: .5rem;
    top: .5rem;
}
</style>

<template>
    <Tabs>
        <TabsSection
            v-for="(pm, key) in installCommands"
            :key="key"
            :selected="tab === key"
        >
            <TabsItem @click="tab = key">
                <Icon>
                    <Iconify :icon="pm.icon"/>
                </Icon>
                {{ key }}
            </TabsItem>
        </TabsSection>
    </Tabs>

    <div class="install-command">
        $ {{ installCommands[tab].command }}

        <ButtonCopy
            class="button-copy"
            title="Копировать код"
            :text="installCommands[tab].command"
        />
    </div>
</template>

<script setup lang="ts">
import { Icon as Iconify } from '@iconify/vue'
import { ref } from 'vue'
import { Icon, Tabs, TabsItem, TabsSection } from 'webasystvue'
import { ButtonCopy } from '@/components/button-copy'

const installCommands = {
    pnpm: {
        command: 'pnpm add webasystvue',
        icon: 'vscode-icons:file-type-light-pnpm',
    },
    npm: {
        command: 'npm add webasystvue',
        icon: 'vscode-icons:file-type-npm',
    },
    yarn: {
        command: 'yarn add webasystvue',
        icon: 'vscode-icons:file-type-yarn',
    },
    bun: {
        command: 'bun add webasystvue',
        icon: 'vscode-icons:file-type-bun',
    },
}

type InstallKey = keyof typeof installCommands

const tab = ref<InstallKey>('pnpm')
</script>
