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
        webasyst({ input: 'src/main.ts' }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        // wa compress удаляет скрытые директории из архива (dist/.vite)
        manifest: 'manifest.json',
    },
})
