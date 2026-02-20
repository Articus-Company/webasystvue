import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

interface WebasystOptions {
    /**
     * APP ID В webasyst
     */
    appId: string

    /**
     * Путь к бекенду
     * @default '/webasyst'
     */
    backendUrl?: string

    /**
     * Корень приложения
     * @default './'
     */
    appRoot?: string

    /**
     * Папка билда (относительно appRoot)
     * @default 'dist'
     */
    buildDirectory?: string

    /**
     * Путь к hot-файлу
     * @default '{buildDirectory}/hot'
     */
    hotFile?: string

    /**
     * ID темы (если это тема)
     * @default undefined
     */
    themeId?: string
}

interface webasystResolvedConfig {
    base?: string
    build?: { manifest?: boolean, outDir?: string }
    define?: Record<string, string>
}

export default function webasyst(options: WebasystOptions): Plugin {
    const appId = options.appId
    const backendUrl = options.backendUrl || '/webasyst'
    const appRoot = options.appRoot || './'
    const buildDirectory = options.buildDirectory || 'dist'
    const themeId = options.themeId
    const hotFilePath = path.resolve(appRoot, options.hotFile ?? `${buildDirectory}/hot`)

    if (!appId) {
        throw new Error('APP ID is required')
    }

    let baseUrl: string
    if (themeId) {
        baseUrl = `/wa-apps/${appId}/themes/${themeId}/${buildDirectory}/`
    } else {
        baseUrl = `/wa-apps/${appId}/${buildDirectory}/`
    }

    return {
        name: 'vite-plugin-webasyst',

        config(userConfig, { command }) {
            const resolvedConfig: webasystResolvedConfig = {}

            if (command === 'build') {
                resolvedConfig.base = baseUrl
            }

            resolvedConfig.define = {
                ...userConfig.define,
                'import.meta.env.BACKEND_URL': JSON.stringify(backendUrl),
                'import.meta.env.APP_URL': JSON.stringify(`${backendUrl}/${appId}`),
            }

            if (command === 'build') {
                if (userConfig.build?.manifest === undefined) {
                    if (!resolvedConfig.build) {
                        resolvedConfig.build = {}
                    }
                    resolvedConfig.build.manifest = true
                }
            }

            return resolvedConfig
        },

        configureServer(server) {
            server.httpServer?.once('listening', () => {
                const address = server.httpServer?.address()
                if (!address || typeof address === 'string') {
                    return
                }

                const host = address.address === '::' ? 'localhost' : address.address
                const port = address.port
                const protocol = server.config.server.https ? 'https' : 'http'
                const url = `${protocol}://${host}:${port}`

                fs.mkdirSync(path.dirname(hotFilePath), { recursive: true })
                fs.writeFileSync(hotFilePath, url)

                server.config.logger.info(
                    `[vite-plugin-webasyst] Hot file created at: ${hotFilePath}`,
                )
                server.config.logger.info(`[vite-plugin-webasyst] Dev server URL: ${url}`)
                server.config.logger.info(
                    `[vite-plugin-webasyst] Production base: ${baseUrl}`,
                )
            })

            const clean = () => {
                if (fs.existsSync(hotFilePath)) {
                    fs.rmSync(hotFilePath)
                    server.config.logger.info(
                        `[vite-plugin-webasyst] Hot file removed (${hotFilePath})`,
                    )
                }
            }

            if (!process.env.VITE_WEBASYST_CLEAN_BOUND) {
                process.on('exit', clean)
                process.on('SIGINT', () => process.exit())
                process.on('SIGTERM', () => process.exit())
                process.on('SIGHUP', () => process.exit())
                process.env.VITE_WEBASYST_CLEAN_BOUND = '1'
            }
        },
    }
}
