import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig([
    {
        name: 'webasystvue',
        entry: ['./src/index.ts'],
        platform: 'neutral',
        sourcemap: true,
        plugins: [Vue({ isProduction: true, sourceMap: true })],
        dts: false,
        hash: false,
        tsconfig: 'tsconfig.build.json',
        inputOptions: {
            // Без этого rolldown генерирует невалидный output при includeDependenciesRecursively: false
            preserveEntrySignatures: 'allow-extension',
        },
        outputOptions: {
            // Без этого rolldown схлопывает модули в один чанк
            minifyInternalExports: false,
            codeSplitting: {
                // По умолчанию true, тянет все зависимости модуля в один чанк,
                // из-за чего, например Alert/AlertClose/AlertFixedBox, склеиваются в alert.js
                includeDependenciesRecursively: false,
                groups: [
                    // Без этого инлайнится в каждый компонент который его использует
                    { test: /lib[\\/]utils/, name: 'utils' },
                    // Без этого инлайнится в каждый компонент
                    { test: /node_modules[\\/]clsx/, name: 'clsx' },
                    // src/alert/AlertClose.vue -> dist/alert/alertClose.js
                    {
                        test: id => id.includes('/src/') && id.includes('.vue'),
                        name: (id) => {
                            const parts = id.split('?')[0].split(/[\\/]/g)
                            const srcIndex = parts.lastIndexOf('src')
                            const [ns, f] = parts.slice(srcIndex + 1)
                            const name = f.slice(0, f.lastIndexOf('.'))
                            return `${ns}/${name[0].toLowerCase() + name.slice(1)}`
                        },
                    },
                ],
            },
        },
    },

    /**
     * DTS сборка
     * Отдельный конфиг чтобы получить один index.d.ts без влияния codeSplitting.
     *
     * rolldown-plugin-dts экспортирует компоненты через двойной typeof:
     *   declare const _default$N: typeof __VLS_export$N
     *   export { _default$N as Alert }
     * IDE (PhpStorm) не резолвит двойной typeof и не видит компоненты в <template>.
     * Хук исправляет это заменой _default$N -> __VLS_export$N напрямую в экспорте
     * TODO: убрать хук когда он уже не понадобится
     */
    {
        name: 'webasystvue-dts',
        entry: ['./src/index.ts'],
        platform: 'neutral',
        plugins: [Vue({ isProduction: true, sourceMap: true })],
        dts: { vue: true, sourcemap: true },
        hash: false,
        tsconfig: 'tsconfig.build.json',
        hooks: {
            'build:done': async (ctx) => {
                const fs = await import('node:fs/promises')
                for (const chunk of ctx.chunks) {
                    if (!chunk.fileName.endsWith('.d.ts')) {
                        continue
                    }
                    const filePath = `${chunk.outDir}/${chunk.fileName}`
                    let content = await fs.readFile(filePath, 'utf-8')
                    const matches = [...content.matchAll(/declare const (_default\$?\d*): typeof (__VLS_export\$\d+);/g)]
                    for (const match of matches) {
                        const [, defaultVar, exportVar] = match
                        content = content.replaceAll(`${defaultVar} as `, `${exportVar} as `)
                    }
                    await fs.writeFile(filePath, content, 'utf-8')
                }
            },
        },
    },
])
