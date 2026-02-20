import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: 'index.ts',
    dts: { sourcemap: true },
    sourcemap: true,
    platform: 'node',
    format: ['cjs', 'esm'],
    hash: false,
})
