<?php

class ViteHelper
{
    private const string DEFAULT_ENTRY = 'src/main.ts';
    private const string DEFAULT_DIST_DIR = 'app/dist';
    private const string HOT_FILENAME = 'hot';
    private const string MANIFEST_FILENAME = '.vite/manifest.json';
    private const string VITE_CLIENT_PATH = '@vite/client';

    /**
     * @throws waException
     * @throws ViteHelperException
     */
    public static function vite(
        ?string $entry = null,
        ?string $theme = null,
        string  $distDir = self::DEFAULT_DIST_DIR
    ): string
    {
        $entry = $entry ?? self::DEFAULT_ENTRY;

        if ($theme !== null) {
            return self::renderThemeVite($theme, $entry, $distDir);
        }

        return self::renderAppVite($entry, $distDir);
    }

    /**
     * @throws waException
     * @throws ViteHelperException
     */
    public static function app(?string $entry = null, string $distDir = self::DEFAULT_DIST_DIR): string
    {
        return self::renderAppVite($entry ?? self::DEFAULT_ENTRY, $distDir);
    }

    /**
     * @throws waException
     * @throws ViteHelperException
     */
    public static function theme(
        string  $themeId,
        ?string $entry = null,
        string  $distDir = self::DEFAULT_DIST_DIR
    ): string
    {
        return self::renderThemeVite($themeId, $entry ?? self::DEFAULT_ENTRY, $distDir);
    }

    /**
     * @throws waException
     * @throws ViteHelperException
     */
    private static function renderAppVite(string $entry, string $distDir): string
    {
        $appPath = wa()->getAppPath();
        $hotFile = $appPath . '/' . $distDir . '/' . self::HOT_FILENAME;
        $manifestPath = $appPath . '/' . $distDir . '/' . self::MANIFEST_FILENAME;

        if (file_exists($hotFile)) {
            $viteUrl = trim(file_get_contents($hotFile));
            return self::renderDevTags($viteUrl, $entry);
        }

        if (!file_exists($manifestPath)) {
            throw new ViteHelperException(sprintf(
                'Vite manifest not found at: %s',
                $manifestPath
            ));
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);
        $assetBasePath = wa()->getAppStaticUrl() . $distDir . '/';

        return self::renderProdTags($manifest, $entry, $assetBasePath);
    }

    /**
     * @throws waException
     * @throws ViteHelperException
     */
    private static function renderThemeVite(string $themeId, string $entry, string $distDir): string
    {
        $theme = self::getTheme($themeId);
        if (!$theme) {
            throw new ViteHelperException(sprintf(
                'Theme "%s" not found',
                $themeId
            ));
        }

        $themePath = $theme->path;
        $hotFile = $themePath . '/' . $distDir . '/' . self::HOT_FILENAME;
        $manifestPath = $themePath . '/' . $distDir . '/' . self::MANIFEST_FILENAME;

        if (file_exists($hotFile)) {
            $viteUrl = trim(file_get_contents($hotFile));
            return self::renderDevTags($viteUrl, $entry);
        }

        if (!file_exists($manifestPath)) {
            throw new ViteHelperException(sprintf(
                'Vite manifest not found for theme "%s" at: %s',
                $themeId,
                $manifestPath
            ));
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);
        $assetBasePath = wa()->getAppStaticUrl() . 'themes/' . $themeId . '/' . $distDir . '/';

        return self::renderProdTags($manifest, $entry, $assetBasePath);
    }

    private static function renderDevTags(string $viteUrl, string $entry): string
    {
        return sprintf(
            '<script type="module" src="%s/%s"></script>' . PHP_EOL .
            '<script type="module" src="%s/%s"></script>',
            $viteUrl,
            self::VITE_CLIENT_PATH,
            $viteUrl,
            $entry
        );
    }

    private static function renderProdTags(array $manifest, string $entry, string $assetBasePath): string
    {
        $entryData = null;
        foreach ($manifest as $item) {
            if (isset($item['isEntry']) && $item['isEntry'] === true && $item['src'] === $entry) {
                $entryData = $item;
                break;
            }
        }

        if (!$entryData) {
            throw new ViteHelperException(sprintf(
                'Entry "%s" with isEntry=true not found in manifest',
                $entry
            ));
        }

        $output = '';

        if (!empty($entryData['css'])) {
            foreach ($entryData['css'] as $css) {
                $output .= sprintf(
                    '<link rel="preload" href="%s%s" as="style"/>' . PHP_EOL,
                    $assetBasePath,
                    $css
                );
            }
        }

        // CSS
        if (!empty($entryData['css'])) {
            foreach ($entryData['css'] as $css) {
                $output .= sprintf(
                    '<link rel="stylesheet" href="%s%s"/>' . PHP_EOL,
                    $assetBasePath,
                    $css
                );
            }
        }

        if (!empty($entryData['assets'])) {
            foreach ($entryData['assets'] as $asset) {
                $ext = pathinfo($asset, PATHINFO_EXTENSION);

                if (in_array($ext, ['woff', 'woff2', 'ttf', 'otf'])) {
                    $output .= sprintf(
                        '<link rel="preload" href="%s%s" as="font" type="font/%s" crossorigin/>' . PHP_EOL,
                        $assetBasePath,
                        $asset,
                        $ext === 'woff' ? 'woff' : 'woff2'
                    );
                } else {
                    $asType = self::getAssetType($ext);
                    if ($asType) {
                        $output .= sprintf(
                            '<link rel="modulepreload" href="%s%s"/>' . PHP_EOL,
                            $assetBasePath,
                            $asset
                        );
                    }
                }
            }
        }

        $output .= sprintf(
            '<script type="module" src="%s%s"></script>',
            $assetBasePath,
            $entryData['file']
        );

        return $output;
    }

    private static function getAssetType(string $extension): ?string
    {
        $types = [
            'js'    => 'script',
            'mjs'   => 'script',
            'css'   => 'style',
        ];

        return $types[$extension] ?? null;
    }

    private static function getTheme(string $themeId): ?waTheme
    {
        try {
            $themes = wa()->getThemes();
            return $themes[$themeId] ?? null;
        } catch (Exception $e) {
            return null;
        }
    }
}
