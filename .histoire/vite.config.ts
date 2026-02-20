import { resolve } from 'node:path'
import { HstVue } from '@histoire/plugin-vue'
import alias from '@rollup/plugin-alias'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const projectRootDir = resolve(__dirname)

export default defineConfig({
    plugins: [
        vue(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: resolve(projectRootDir, '../packages/core/src'),
                },
                {
                    find: '@lib',
                    replacement: resolve(projectRootDir, '../packages/core/lib'),
                },
            ],
        }),
    ],
    histoire: {
        plugins: [HstVue()],
        setupFile: './histoire.setup.ts',
        storyMatch: [resolve(projectRootDir, '../packages/core/src/**/*.story.vue')],
        tree: {
            groups: [{ title: 'Components', include: _file => true }],
        },
        theme: {
            title: 'Webasyst Vue',
            logo: {
                square: '../assets/img/webasystvue.png',
                light: '../assets/img/webasystvue.png',
                dark: '../assets/img/webasystvue.png',
            },
        },
    },

    server: {
        fs: {
            // Allow serving files from two level up to the project root
            allow: ['..'],
        },
    },
})
