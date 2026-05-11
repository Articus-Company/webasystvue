<?php

class viteWebasyst
{
    public const DEFAULT_HOT_FILENAME = 'hot';
    public const DEFAULT_MANIFEST_PATH = '.vite/manifest.json';
    public const DEFAULT_ENTRY_POINTS = ['src/main.ts'];

    /**
     * Кеш загруженных манифестов.
     * Общий для всех экземпляров, чтобы не читать файл дважды за один запрос.
     *
     * @var array
     */
    protected static array $manifests = [];

    /** @var string Абсолютный путь к папке dist на файловой системе. */
    protected string $distPath;

    /** @var string Веб путь к папке dist от корня сайта. */
    protected string $webDist;

    /** @var string Имя hot файла. */
    protected string $hotFilename = self::DEFAULT_HOT_FILENAME;

    /** @var string Путь к manifest.json относительно dist. */
    protected string $manifestPath = self::DEFAULT_MANIFEST_PATH;

    /** @var string[] Точки входа Vite. */
    protected array $entryPoints = self::DEFAULT_ENTRY_POINTS;

    /**
     * Включить поддержку React Fast Refresh.
     * В dev режиме вставляет preamble скрипт перед остальными тегами,
     * без которого vitejs/plugin-react выбрасывает ошибку при работе с PHP шаблонами.
     *
     * @var bool
     */
    protected bool $react = false;

    /**
     * @param string $relativeDistPath Путь к dist относительно корня приложения, например 'themes/mytheme/dist'.
     * @param array{
     *     entry?: string[],
     *     hot?: string,
     *     manifest?: string,
     *     react?: bool,
     * } $options
     */
    public function __construct(string $relativeDistPath, array $options = [])
    {
        $relativeDistPath = trim($relativeDistPath, '/');
        $this->distPath = wa()->getAppPath($relativeDistPath);
        $this->webDist = rtrim(wa()->getAppStaticUrl(), '/') . '/' . $relativeDistPath;
        $this->hotFilename = $options['hot'] ?? self::DEFAULT_HOT_FILENAME;
        $this->manifestPath = $options['manifest'] ?? self::DEFAULT_MANIFEST_PATH;
        $this->entryPoints = $options['entry'] ?? self::DEFAULT_ENTRY_POINTS;
        $this->react = $options['react'] ?? false;
    }

    /**
     * Сгенерировать HTML теги для подключения Vite сборки.
     *
     * В dev режиме, если hot файл существует, подключает Vite dev server.
     * В prod режиме читает manifest.json и подключает собранные файлы.
     *
     * @param string $relativeDistPath Путь к dist относительно корня приложения.
     * @param array{
     *     entry?: string[],
     *     hot?: string,
     *     manifest?: string,
     *     react?: bool,
     * } $options
     *
     * @return string HTML для вставки.
     *
     * @throws viteWebasystException
     *
     * @example Smarty: {viteWebasyst::vite('themes/mytheme/dist', ['entry' => ['src/main.ts']])}
     */
    public static function vite(string $relativeDistPath, array $options = []): string
    {
        return (new static($relativeDistPath, $options))->render();
    }

    /**
     * Сгенерировать HTML в зависимости от текущего режима dev или prod.
     *
     * @return string
     *
     * @throws viteWebasystException
     */
    public function render(): string
    {
        return $this->isRunningHot()
            ? $this->renderDevTags()
            : $this->renderProdTags();
    }

    /**
     * Определить, запущен ли Vite dev server.
     *
     * @return bool
     */
    public function isRunningHot(): bool
    {
        return file_exists($this->hotFile());
    }

    /**
     * Получить абсолютный путь к hot файлу.
     *
     * @return string
     */
    protected function hotFile(): string
    {
        return $this->distPath . '/' . $this->hotFilename;
    }

    /**
     * Прочитать URL Vite dev server из hot файла.
     *
     * @return string Например: http://localhost:5173
     */
    protected function devServerUrl(): string
    {
        return rtrim(file_get_contents($this->hotFile()), "\r\n");
    }

    /**
     * Сгенерировать теги для dev режима.
     * Подключает vite/client для HMR и каждую точку входа напрямую с dev server.
     *
     * @return string
     */
    protected function renderDevTags(): string
    {
        $devUrl = $this->devServerUrl();

        $tags = '';

        if ($this->react) {
            $tags .= $this->renderReactPreamble($devUrl);
        }

        $entries = array_merge(['@vite/client'], $this->entryPoints ?: self::DEFAULT_ENTRY_POINTS);

        foreach ($entries as $entry) {
            $url = htmlspecialchars($devUrl . '/' . ltrim($entry, '/'));
            $tags .= $this->makeTag($url);
        }

        return $tags;
    }

    /**
     * Сгенерировать preamble скрипт для React Fast Refresh.
     *
     * Требуется при использовании vitejs/plugin-react с PHP шаблонами:
     * плагин не может автоматически вставить preamble как делает это для index.html,
     * поэтому его нужно добавить вручную перед vite/client.
     *
     * @param string $devUrl URL Vite dev server.
     *
     * @return string
     */
    protected function renderReactPreamble(string $devUrl): string
    {
        $refreshUrl = htmlspecialchars($devUrl . '/@react-refresh');

        return <<<HTML
<script type="module">
  import RefreshRuntime from '$refreshUrl'
  RefreshRuntime.injectIntoGlobalHook(window)
  window.\$RefreshReg\$ = () => {}
  window.\$RefreshSig\$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true
</script>
HTML. "\n";
    }

    /**
     * Сгенерировать теги для prod режима.
     * Читает manifest.json и рекурсивно подключает все чанки для каждой точки входа.
     *
     * @return string
     *
     * @throws viteWebasystException
     */
    protected function renderProdTags(): string
    {
        $manifest = $this->manifest();
        $entries = $this->entryPoints ?: $this->findDefaultEntries($manifest);

        $seen = [];
        $tags = '';

        foreach ($entries as $entry) {
            $chunk = $this->chunk($manifest, $entry);
            $tags .= $this->renderChunk($chunk, $manifest, $seen);
        }

        return $tags;
    }

    /**
     * Сгенерировать HTML тег.
     * CSS файлы получают тег <link rel="stylesheet">, остальные <script>.
     *
     * @param string $url Полный веб URL файла.
     *
     * @return string
     */
    protected function makeTag(string $url): string
    {
        if (substr($url, -4) === '.css') {
            return "<link rel=\"stylesheet\" href=\"$url\">\n";
        }

        return "<script type=\"module\" src=\"$url\"></script>\n";
    }

    /**
     * Рекурсивно сгенерировать теги для чанка и всех его импортов.
     * Массив $seen предотвращает дублирование тегов когда несколько чанков
     * импортируют один общий чанк.
     *
     * @param array $chunk
     * @param array $manifest
     * @param array $seen Уже обработанные файлы, передаётся по ссылке.
     *
     * @return string
     */
    protected function renderChunk(array $chunk, array $manifest, array &$seen): string
    {
        $file = $this->webDist . '/' . $chunk['file'];

        if (isset($seen[$file])) {
            return '';
        }
        $seen[$file] = true;

        $tags = '';

        foreach ($chunk['css'] ?? [] as $css) {
            $cssUrl = $this->webDist . '/' . $css;
            if (!isset($seen[$cssUrl])) {
                $seen[$cssUrl] = true;
                $tags .= "<link rel=\"stylesheet\" href=\"$cssUrl\">\n";
            }
        }

        foreach ($chunk['imports'] ?? [] as $importKey) {
            if (isset($manifest[$importKey])) {
                $tags .= $this->renderChunk($manifest[$importKey], $manifest, $seen);
            }
        }

        $tags .= !empty($chunk['isEntry'])
            ? "<script type=\"module\" src=\"$file\"></script>\n"
            : "<link rel=\"modulepreload\" href=\"$file\">\n";

        return $tags;
    }

    /**
     * Загрузить и вернуть данные manifest.json.
     *
     * @return array
     *
     * @throws viteWebasystException Если файл манифеста не найден.
     */
    protected function manifest(): array
    {
        $path = $this->distPath . '/' . $this->manifestPath;

        if (!isset(static::$manifests[$path])) {
            if (!file_exists($path)) {
                throw new viteWebasystException("manifest не найден по пути $path");
            }
            static::$manifests[$path] = json_decode(file_get_contents($path), true) ?? [];
        }

        return static::$manifests[$path];
    }

    /**
     * Найти чанк в манифесте по пути к точке входа.
     *
     * @param array $manifest
     * @param string $entry Путь к точке входа, например 'src/main.ts'.
     *
     * @return array
     *
     * @throws viteWebasystException Если чанк не найден.
     */
    protected function chunk(array $manifest, string $entry): array
    {
        $entry = ltrim($entry, './');

        foreach ($manifest as $key => $chunk) {
            if (ltrim($key, './') === $entry) {
                return $chunk;
            }
        }

        throw new viteWebasystException("chunk не найден для '$entry'");
    }

    /**
     * Найти все точки входа в манифесте.
     * Используется когда точки входа не заданы явно.
     *
     * @param array $manifest
     *
     * @return string[] Ключи манифеста для найденных точек входа.
     *
     * @throws viteWebasystException Если в манифесте нет ни одной точки входа.
     */
    protected function findDefaultEntries(array $manifest): array
    {
        $entries = [];
        foreach ($manifest as $key => $chunk) {
            if (!empty($chunk['isEntry'])) {
                $entries[] = $key;
            }
        }

        if (empty($entries)) {
            throw new viteWebasystException('в манифесте нет ни одного entry chunk');
        }

        return $entries;
    }
}
