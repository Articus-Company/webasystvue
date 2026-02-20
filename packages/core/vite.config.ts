import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: 'tsconfig.build.json',
            exclude: ['src/**/story/**', 'src/**/*.story.vue'],
            rollupTypes: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@lib': resolve(__dirname, 'lib'),
        },
    },
    build: {
        minify: false,
        target: 'esnext',
        sourcemap: true,
        lib: {
            name: 'webasystvue',
            formats: ['es'],
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
            },
        },
        rolldownOptions: {
            external: [
                ...Object.keys(pkg.dependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
            ],
            output: {
                exports: 'named',
                chunkFileNames: '[name].js',
                minifyInternalExports: true,
            },
        },
    },
})
