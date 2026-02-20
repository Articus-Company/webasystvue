import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import webasyst from 'vite-plugin-webasyst'

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: false,
            },
        }),
        vueDevTools(),
        webasyst({ appId: 'webasystvue' }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        rolldownOptions: {
            input: {
                main: 'src/main.ts',
            },
        },
    },
})
